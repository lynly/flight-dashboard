import React from "react";
import { Dashboard } from "./styles";
import DisplayConsole from "../DisplayConsole";
import ControlConsole from "../ControlConsole";

const FlightDashboard = ({
  allCapsules,
  handleOnClickCapsules,
}) => (
    <Dashboard>
      <DisplayConsole allCapsules={allCapsules} />
      <ControlConsole handleOnClickCapsules={handleOnClickCapsules} />
    </Dashboard>
  );

export default FlightDashboard;
