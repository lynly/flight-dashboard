import React from "react";
import { Display } from "./styles";
import CapsuleList from "../CapsuleList";
import EmptyState from "../EmptyState";

const DisplayConsole = ({ allCapsules }) => {
  const { capsules, isLoading } = allCapsules;

  return (
    <Display>
      {!capsules && !isLoading && <EmptyState />}
      {!capsules && isLoading && <p>Loading ...</p>}
      {!isLoading && capsules && <CapsuleList capsules={capsules} />}
    </Display>
  );
};

export default DisplayConsole;
