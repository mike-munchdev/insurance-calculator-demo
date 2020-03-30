import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'reactstrap';

import { MDTextField } from '../TextFields/';

const Extra = props => {
  const { errors, values, handleChange } = props;

  return (
    <Container>
      <Row>
        <Col md="2"></Col>
        <Col md="4">
          <MDTextField
            appendText="%"
            label="Estimated inflation rate"
            id="estimatedInflationRate"
            placeholder="5"
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="4">
          <MDTextField
            appendText="%"
            label="After-tax net investment yield"
            id="afterTaxNetInvestmentYield"
            placeholder="6"
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
};

Extra.propTypes = {
  tooltipStates: PropTypes.object,
  toggleTooltipState: PropTypes.func
};
export default Extra;
