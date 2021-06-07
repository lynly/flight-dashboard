import React from "react";
import Dashboard from "./styles";
import DisplayConsole from "../DisplayConsole";
import ControlConsole from "../ControlConsole";
import { Row, Col } from "../../components/index";

const FlightDashboard = ({
  appState,
  handleOnClickCapsules,
  handleOnClickLandingPad,
}) => (
    <Dashboard>
      <Row>
        <Col>
          <DisplayConsole appState={appState} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ControlConsole handleOnClickCapsules={handleOnClickCapsules} handleOnClickLandingPad={handleOnClickLandingPad} appState={appState} />
        </Col>
      </Row>
    </Dashboard>
  );

export default FlightDashboard;
