import { hot } from "react-hot-loader/root";
import React from "react";
import GlobalStyle from "../theme";
import { Application } from "./styles";
import FlightDashboard from "./FlightDashboard";

const App = () => (
  <>
    <Application>
      <FlightDashboard />
    </Application>
    <GlobalStyle />
  </>
);

export default hot(App);
