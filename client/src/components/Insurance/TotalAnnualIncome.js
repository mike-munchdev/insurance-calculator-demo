import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'reactstrap';

import { MDTextField } from '../TextFields/';

const TotalAnnualIncome = props => {
  const { tooltipStates, toggleTooltipState } = props;

  const { errors, values, handleChange } = props;

  return (
    <Container>
      <Row>
        <Col md="2"></Col>
        <Col md="4">
          <MDTextField
            prependText="$"
            label="Total annual income?"
            id="totalAnnualIncome"
            placeholder="0"
            values={values}
            toggleTooltip={() => toggleTooltipState('totalAnnualIncomeTooltip')}
            isTooltipOpen={tooltipStates['totalAnnualIncomeTooltip']}
            tooltipText={`Total amount your family needs, before taxes, to maintain their current standard of living, typically 60%-75% of total income. Families with higher incomes typically fall into the lower end of that range.`}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="4">
          <MDTextField
            label="How many years should income be provided?"
            id="yearsOfIncome"
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="2"></Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="4">
          <MDTextField
            prependText="$"
            label="What is your current savings and investments (not including retirement funds)?"
            id="currentSavingsInvestments"
            placeholder="0"
            values={values}
            toggleTooltip={() =>
              toggleTooltipState('currentSavingsInvestmentsTooltip')
            }
            isTooltipOpen={tooltipStates['currentSavingsInvestmentsTooltip']}
            tooltipText={`Includes bank accounts, money market accounts, mutual funds, CDs, bonds, stocks and other assets.`}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="4">
          <MDTextField
            prependText="$"
            label="What are your current retirement savings?"
            id="currentRetirementSavings"
            placeholder="0"
            values={values}
            toggleTooltip={() =>
              toggleTooltipState('currentRetirementSavingsTooltip')
            }
            isTooltipOpen={tooltipStates['currentRetirementSavingsTooltip']}
            tooltipText={`Includes 401(k), Keoghs, pension and profit sharing plans.`}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="2"></Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="4">
          <MDTextField
            prependText="$"
            label="What is the value of the life insurance in force on your life?"
            id="lifeInsuranceValue"
            placeholder="0"
            values={values}
            toggleTooltip={() =>
              toggleTooltipState('lifeInsuranceValueTooltip')
            }
            isTooltipOpen={tooltipStates['lifeInsuranceValueTooltip']}
            tooltipText={`Includes individual policies, group term coverage available through work, and any other life insurance on your life payable to your family or for the benefit of your family. Do not include accidental death insurance or “double indemnity” insurance.`}
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

TotalAnnualIncome.propTypes = {
  tooltipStates: PropTypes.object,
  toggleTooltipState: PropTypes.func
};
export default TotalAnnualIncome;
