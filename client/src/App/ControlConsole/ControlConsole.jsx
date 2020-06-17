import React from "react";
import { Control, Row, Col, Button, Input } from "./styles";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";

const ControlConsole = () => (
  <Control>
    <Row>
      <Col>
        <Button>Capsules</Button>
      </Col>
      <Col>
        <Rocket />
      </Col>
      <Col>
        <form>
          <Row>
            <Col>
              <Input
                placeholder="text"
                type="text"
                maxLength="15"
                id="landing-pad"
                name="landing-pad"
              />
            </Col>
            <Col>
              {/* TODO: add logic for disabled */}
              <Button disabled>Landing Pad</Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  </Control>
);

export default ControlConsole;
