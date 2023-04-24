import { Card } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { CandidateService } from "../../../service/CandidateService";
import { CandidatesListHeader } from "../candidatesHeader";
import { CandidatesType } from "../candidatesTable/index.stories";
import { Columns } from "../candidatesTable/index.styles";
import { PaginationTable } from "../paginationTable";
export const CandidateList = () => {
  const [posts, setPosts] = useState([] as CandidatesType[]);
  const [searchValue, setSearchValue] = useState("");
  const [postsDup, setPostsDup] = useState([] as CandidatesType[]);
  const [status, setStatus] = useState<string[]>([]);
  const [adjudication, setAdjudication] = useState<string[]>([]);

  const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = status.indexOf(e.target.value);
    if (index === -1) {
      setStatus([...status, e.target.value]);
    } else {
      setStatus(status.filter((row) => row !== e.target.value));
    }
  };

  const handleAdjudication = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = adjudication.indexOf(e.target.value);
    if (index === -1) {
      setAdjudication([...adjudication, e.target.value]);
    } else {
      setAdjudication(adjudication.filter((row) => row !== e.target.value));
    }
  };

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };

  const getCandidates = useCallback(() => {
    CandidateService.ListCandidates().then((res) => {
      const candidates = res.data as CandidatesType[];
      setPostsDup(candidates);
      setPosts(candidates);
    });
  }, [postsDup]);

  const defaultFun = (
    status: string[],
    adjudication: string[],
    filterPosts: CandidatesType[]
  ) => {
    if (status.length > 0 && adjudication.length > 0) {
      const filterData = filterPosts.filter((candidate) => {
        return (
          status.includes(candidate.status) &&
          adjudication.includes(candidate.adjudication)
        );
      });
      setPosts(filterData);
    } else setPosts(filterPosts);
  };

  useEffect(() => {
    getCandidates();
  }, []);
  useEffect(() => {
    const filterPosts = postsDup.filter((item: { name: string }) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setPosts(filterPosts);
    switch (true) {
      case status.length > 0 &&
        (adjudication.length === 0 || adjudication.includes("all")): {
        if (status.includes("allstatus")) setPosts(filterPosts);
        else {
          const filterData = filterPosts.filter((candidate) => {
            return status.includes(candidate.status);
          });
          setPosts(filterData);
        }
        break;
      }
      case adjudication.length > 0 &&
        (status.length === 0 || status.includes("allstatus")): {
        if (adjudication.includes("all")) setPosts(filterPosts);
        else {
          const filterData = filterPosts.filter((candidate) => {
            return adjudication.includes(candidate.adjudication);
          });
          setPosts(filterData);
        }
        break;
      }
      default: {
        defaultFun(status, adjudication, filterPosts);
        break;
      }
    }
  }, [status, adjudication, searchValue]);

  return (
    <div data-testid="card">
      <Card sx={{ borderRadius: "6px" }}>
        <CandidatesListHeader
          menu={true}
          value={searchValue}
          changeHandler={handleSearch}
          group={[
            {
              checkboxes: [
                {
                  label: "All Status",
                  value: "allstatus",
                },
                {
                  label: "Clear",
                  value: "CLEAR",
                },
                {
                  label: "Consider",
                  value: "CONSIDER",
                },
              ],
              name: "Status",
              handleChange: handleStatus,
            },
            {
              checkboxes: [
                {
                  label: "All",
                  value: "all",
                },
                {
                  label: "Engaged",
                  value: "engage",
                },
                {
                  label: "Pre adverse action",
                  value: "Adverse Action",
                },
              ],
              name: "Adjudication",
              handleChange: handleAdjudication,
            },
          ]}
        />
        <PaginationTable candidates={posts} header={Columns} />
      </Card>
    </div>
  );
};
