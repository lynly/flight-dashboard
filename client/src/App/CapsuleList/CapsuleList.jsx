import React from "react";
import CapsuleCard from "../CapsuleCard";

const CapsuleList = ({ capsules }) => (
  <>
    <h3>All Capsules</h3>
    {capsules.map((capsule, index) => (
      <CapsuleCard key={index} capsule={capsule} />
    ))}
  </>
);

export default CapsuleList;
