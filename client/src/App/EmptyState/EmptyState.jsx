import React from "react";
import { Empty } from "./styles";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";

const EmptyState = () => (
  <Empty>
    <Rocket />
    <span>
      "Space isn't remote at all. It's only an hour's drive away, if your car
      could go straight upwards."
    </span>
  </Empty>
);

export default EmptyState;
