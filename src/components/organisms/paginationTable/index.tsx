import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { CandidatesTable } from "../candidatesTable";
import { CandidatesType } from "../candidatesTable/index.stories";
import { PaginationFooter } from "../pagination";
interface PaginationTableProps {
  candidates: [] | CandidatesType[];
  header: GridColDef[];
}
export const PaginationTable = ({
  candidates,
  header,
}: PaginationTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = candidates.slice(indexOfFirstPost, indexOfLastPost);
  const lastPost =
    indexOfLastPost > candidates.length ? candidates.length : indexOfLastPost;
  const handlePostPerPage = (value: number) => {
    SetPostsPerPage(value);
  };
  const paginate = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div data-testid="page-table">
      <CandidatesTable header={header} candidates={currentPosts} />
      <PaginationFooter
        indexOfLastPost={lastPost}
        postsPerPage={postsPerPage}
        totalPosts={candidates.length}
        paginate={paginate}
        setPostsPerPage={handlePostPerPage}
      />
    </div>
  );
};
