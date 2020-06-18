import React from "react";
import { Control, Row, Col, Button, Input } from "./styles";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";

const ControlConsole = ({ handleOnClickCapsules }) => (
  <Control>
    <Row>
      <Col>
        <Button onClick={handleOnClickCapsules}>Capsules</Button>
      </Col>
      <Col>
        <Rocket />
      </Col>
      <Col>
        <form>
          <Input
            placeholder="text"
            type="text"
            maxLength="15"
            id="landing-pad"
            name="landing-pad"
          />
          {/* TODO: how fetch multple apis?
          - grab value from input and pass to api url, 
          - add logic for disabled when value not valid */}
          <Button disabled>Landing Pad</Button>
        </form>
      </Col>
    </Row>
  </Control>
);

export default ControlConsole;
