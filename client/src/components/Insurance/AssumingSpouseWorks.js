import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'reactstrap';

import { MDTextField } from '../TextFields/';

const AssumingSpouseWorks = props => {
  const { tooltipStates, toggleTooltipState } = props;

  const { errors, values, handleChange } = props;

  return (
    <Container>
      <Row>
        <Col md="2"></Col>
        <Col md="4">
          <MDTextField
            prependText="$"
            label="What is your spouse’s annual income?"
            id="spouseAnnualIncome"
            placeholder="0"
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="4">
          <MDTextField
            label="How many years does your spouse expect to work?"
            id="spouseExpectedWorkYears"
            values={values}
            errors={errors}
            handleChange={handleChange}
            placeholder="0"
          />
        </Col>
        <Col md="2"></Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="4">
          <MDTextField
            appendText="%"
            label="Your spouse’s marginal tax rate?"
            id="spouseMarginalTaxRate"
            placeholder="25"
            values={values}
            toggleTooltip={() =>
              toggleTooltipState('spouseMarginalTaxRateTooltip')
            }
            isTooltipOpen={tooltipStates['spouseMarginalTaxRateTooltip']}
            tooltipText={`Marginal tax rate: This is the rate of tax you are paying on your highest dollars of income. For instance, in 2013 a married taxpayer earning $50,000 has a Marginal Tax Rate of 15%. That’s because earned income between $72,500 and $146,400 gets taxed at 25%. The lowest Marginal Tax Rate is 10% and applies to couples who earn less than $17,850. The highest Marginal Tax Rate is 39.6% for dollars earned in excess of $450,000.`}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="4"></Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
};

AssumingSpouseWorks.propTypes = {
  tooltipStates: PropTypes.object,
  toggleTooltipState: PropTypes.func
};
export default AssumingSpouseWorks;
