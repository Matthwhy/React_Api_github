import React from "react";
import RepoItem from "../RepoList/RepoItem";


const RepoList = ({ repos }) => (
  <div className="repoListContainer">
    {repos.map((repo, id) => {
      return (
        <RepoItem repo={repo} key={id} />
      );
    })}
  </div>
);

export default RepoList;