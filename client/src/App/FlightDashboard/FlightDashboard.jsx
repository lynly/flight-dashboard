import React from "react";
import { Dashboard } from "./styles";
import DisplayConsole from "../DisplayConsole";
import ControlConsole from "../ControlConsole";

const FlightDashboard = () => (
  <Dashboard>
    <DisplayConsole />
    <ControlConsole />
  </Dashboard>
);

export default FlightDashboard;
