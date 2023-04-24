import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CandidateService } from "../../../service/CandidateService";
import { CandidatesListHeader } from "../candidatesHeader";
import { PaginationTable } from "../paginationTable";
import { AdverseTableHeader } from "./index.styles";

export const AdverseActionList = () => {
  const [posts, setPosts] = useState([] as any);
  const [searchValue, setSearchValue] = useState("");
  const [postsDup, setPostsDup] = useState([] as any);
  const [status, setStatus] = useState<string[]>([]);
  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };
  const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = status.indexOf(e.target.value);
    if (index === -1) {
      setStatus([...status, e.target.value]);
    } else {
      setStatus(status.filter((row) => row !== e.target.value));
    }
  };

  useEffect(() => {
    CandidateService.ListAdverseActionService().then((res) => {
      const candidates = res.data;
      setPostsDup(candidates);
      setPosts(candidates);
    });
  }, []);
  useEffect(() => {
    const filterPosts = postsDup.filter((item: { name: string }) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setPosts(filterPosts);
    if (status.length === 0 || status.includes("allstatus"))
      setPosts(filterPosts);
    else {
      const filterData = filterPosts.filter((candidate: { status: string }) => {
        return status.includes(candidate.status);
      });
      setPosts(filterData);
    }
  }, [searchValue, status]);
  return (
    <div data-testid="adverseList">
      <Card sx={{ borderRadius: "6px" }}>
        <CandidatesListHeader
          menu={false}
          group={[
            {
              checkboxes: [
                {
                  label: "All Status",
                  value: "allstatus",
                },
                {
                  label: "Pending",
                  value: "pending",
                },
                {
                  label: "Scheduled",
                  value: "scheduled",
                },
                {
                  label: "Dispute",
                  value: "dispute",
                },
                {
                  label: "Canceled",
                  value: "canceled",
                },
                {
                  label: "Undeliverable",
                  value: "undeliverable",
                },
              ],
              name: "Status",
              handleChange: handleStatus,
            },
          ]}
          value={searchValue}
          changeHandler={handleSearch}
        />
        <PaginationTable candidates={posts} header={AdverseTableHeader} />
      </Card>
    </div>
  );
};
