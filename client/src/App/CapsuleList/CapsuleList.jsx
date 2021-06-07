import React from "react";
import CapsuleCard from "../CapsuleCard";

const CapsuleList = ({ capsules }) => (
  <>
    <h1>All Capsules</h1>
    {capsules.map((capsule, index) => (
      <CapsuleCard key={index} capsule={capsule} />
    ))}
  </>
);

export default CapsuleList;
