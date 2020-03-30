import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';

const Analysis = props => (
  <Container>
    <Row>
      <Col>
        <h1>Your need for life insurance:</h1>
      </Col>
    </Row>
    <Row>
      <Col md="8">
        <Input type="text" disabled className="analysis-text"></Input>
      </Col>
    </Row>
    <Row className="mt-2">
      <Col>
        Should you die, the financial impact on your dependents is the loss of
        your income as well as the immediate expenses associated with your
        death. The death benefit offered through life insurance serves as
        replacement income for a period of time to help your family build a more
        financially secure future.
      </Col>
    </Row>
  </Container>
);
export default Analysis;

Analysis.propTypes = {};
