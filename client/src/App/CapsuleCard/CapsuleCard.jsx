import React from "react";
import { Card, Row, Col } from "../../components/index";


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
            <strong>Capsule id: </strong>
            {capsule_id}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Capsule serial: </strong>
            {capsule_serial}
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
        <Col>
          <p>
            <strong>Landings:</strong>
            {landings}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>Missions: </strong>
          </p>
          <ul>
            {missions &&
              missions.map((mission, index) => (
                <li key={index}>
                  <strong>Name: </strong> {mission.name},{" "}
                  <strong>Flight: </strong> {mission.flight}
                </li>
              ))}
          </ul>
        </Col>
        <Col>
          <p>
            <strong>Status: </strong>
            {status}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>Original launch: </strong>
            {original_launch}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Original launch unix: </strong>
            {original_launch_unix}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <strong>Reuse count:</strong>
            {reuse_count}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Type: </strong>
            {type}
          </p>
        </Col>
      </Row>
    </Card>
  );
};

export default CapsuleCard;
