import React from "react";
import { Row, Col, Card } from "./styles";

const CapsuleCard = ({ capsule }) => {
  const {
    capsule_id,
    capsule_serial,
    details,
    landings,
    missions,
    original_launch,
    original_launch_unix,
    reuse_count,
    status,
    type,
  } = capsule;

  return (
    <Card>
      <Row>
        <Col>
          <p>
            <strong>capsule id: </strong>
            {capsule_id}
          </p>
        </Col>
        <Col>
          <p>
            <strong>capsule serial: </strong>
            {capsule_serial}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>details: </strong>
            {details}
          </p>
        </Col>
        <Col>
          <p>
            <strong>landings:</strong>
            {landings}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>missions: </strong>
          </p>
          <ul>
            {missions &&
              missions.map((mission, index) => (
                <li key={index}>
                  <strong>name: </strong> {mission.name},{" "}
                  <strong>flight: </strong> {mission.flight}
                </li>
              ))}
          </ul>
        </Col>
        <Col>
          <p>
            <strong>status: </strong>
            {status}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>original launch: </strong>
            {original_launch}
          </p>
        </Col>
        <Col>
          <p>
            <strong>original launch unix: </strong>
            {original_launch_unix}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>reuse count:</strong>
            {reuse_count}
          </p>
        </Col>
        <Col>
          <p>
            <strong>type: </strong>
            {type}
          </p>
        </Col>
      </Row>
    </Card>
  );
};

export default CapsuleCard;
