import React from "react";
import { Card, Row, Col } from "../../components/index";

const LandingPadCard = ({ padDetails }) => {
  const {
    id,
    full_name,
    status,
    location,
    landing_type,
    successful_landings,
    attempted_landings,
    wikipedia,
    details
  } = padDetails;
  return (
    <>
      <h1>Landing Pad {id}</h1>
      <Card>
        <Row>
          <Col>
            <p>
              <strong>Landing pad id: </strong>
              {id}
            </p>
          </Col>
          <Col>
            <p>
              <strong>Full name: </strong>
              {full_name}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <strong>Location name: </strong>
              {location.name}
            </p>
          </Col>
          <Col>
            <p>
              <strong>Region: </strong>
              {location.region}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <strong>Latitude: </strong>
              {location.latitude}
            </p>
          </Col>
          <Col>
            <p>
              <strong>Longitude: </strong>
              {location.longitude}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <strong>Status: </strong>
              {status}
            </p>
          </Col>
          <Col>
            <p>
              <strong>Landing type: </strong>
              {landing_type}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <strong>Successful landings: </strong>
              {successful_landings}
            </p>
          </Col>
          <Col>
            <p>
              <strong>Attempted landings: </strong>
              {attempted_landings}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <strong>Wikipedia: </strong>
              <a href={wikipedia} target="_blank" rel="noopener noreferrer">{wikipedia}</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <strong>Details: </strong>
              {details}
            </p>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default LandingPadCard;
