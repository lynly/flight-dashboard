import React from "react";
import Display from "./styles";
import CapsuleList from "../CapsuleList";
import LandingPadCard from "../LandingPadCard";
import EmptyState from "../EmptyState";
import { Row, Col } from "../../components/index";

const DisplayConsole = ({ appState }) => {
  const { capsules, isLoading, padDetails } = appState;

  return (
    <Display>
      <Row>
        <Col>
          {!isLoading && (!capsules && !padDetails) && <EmptyState />}
          {isLoading && (!capsules || !padDetails) && <p>Loading ...</p>}
          {!isLoading && capsules && <CapsuleList capsules={capsules} />}
          {!isLoading && padDetails && <LandingPadCard padDetails={padDetails} />}
        </Col>
      </Row>
    </Display>
  );
};

export default DisplayConsole;
