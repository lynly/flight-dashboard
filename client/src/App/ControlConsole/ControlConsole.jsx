import React, { useState } from "react";
import Control from "./styles";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";
import { Button, Input, Row, Col, HideOnMobile } from "../../components/index";

const ControlConsole = ({ handleOnClickCapsules, handleOnClickLandingPad, appState }) => {
  const [landingPad, setLandingPad] = useState('');
  const { hasError } = appState;

  return (
    <Control>
      <Row >
        <Col>
          <form>
            <Row>
              <Col>
                <Input.Label htmlFor="landing-pad">Landing Pad</Input.Label>
                <Input.Help id='landing-pad-helper'>An example id is LZ-4</Input.Help>
                <Row>
                  <Col>
                    <Input
                      hasError={hasError}
                      type="text"
                      maxLength="15"
                      id="landing-pad"
                      name="landing-pad"
                      value={landingPad}
                      onChange={e => setLandingPad(e.target.value)}
                    />
                    {hasError &&
                      <Input.Error id='landing-pad-error'>Please provide a valid ID</Input.Error>
                    }
                  </Col>
                  <Col>
                    <Button type='button' onClick={() => handleOnClickLandingPad(landingPad.toUpperCase())}>Find Landing Pad</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Col>
        <HideOnMobile>
          <Col>
            <Rocket style={{ marginTop: '2.875rem' }} />
          </Col>
        </HideOnMobile>
        <Col>
          <Button variant='secondary' type='button' onClick={handleOnClickCapsules} style={{ marginTop: '2.875rem' }}>Capsules</Button>
        </Col>
      </Row>
    </Control>
  )
};

export default ControlConsole;
