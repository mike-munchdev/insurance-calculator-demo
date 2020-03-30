import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  Label,
  InputGroup,
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';

import { MDTextField } from '../TextFields/';
import { MDTooltip } from '../Tooltips';

const EstimateFamilyExpenses = props => {
  const { tooltipStates, toggleTooltipState } = props;

  const { errors, values, handleChange } = props;

  return (
    <Container>
      <Row>
        <Col md="2"></Col>
        <Col md="4">
          <MDTextField
            prependText="$"
            label="Final expenses"
            id="finalExpenses"
            placeholder="15000"
            values={values}
            toggleTooltip={() => toggleTooltipState('finalExpensesTooltip')}
            isTooltipOpen={tooltipStates['finalExpensesTooltip']}
            tooltipText={`Typically the greater of $15,000 or 4% of your estate. This
            would include uncovered medical costs, funeral expenses, and
            final estate settlement costs. Note: If your estate is over
            $1,500,000 your final expenses may be much higher due to
            federal and state estate or inheritance taxes.`}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="4">
          <MDTextField
            prependText="$"
            label="Outstanding debts (other than your mortgage)"
            id="oustandingDebts"
            placeholder="0"
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
            label="Outstanding mortgage"
            id="outstandingMortgage"
            placeholder="0"
            values={values}
            toggleTooltip={() =>
              toggleTooltipState('outstandingMortgageTooltip')
            }
            isTooltipOpen={tooltipStates['outstandingMortgageTooltip']}
            tooltipText={`Mortgage payment fund: Whether or not your survivors would use life insurance proceeds to pay off the mortgage right away, creating a fund to cover mortgage payments makes sense.`}
            errors={errors}
            handleChange={handleChange}
          />
        </Col>
        <Col md="4"></Col>
        <Col md="2"></Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="4">
          <FormGroup>
            <Label for="childrenCollgeFunding">
              How many children require college funding?
            </Label>
            <InputGroup>
              <Input
                type="select"
                name="select"
                id="childrenCollgeFunding"
                onChange={handleChange}
                value={values.childrenCollgeFunding}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Input>
              <MDTooltip
                target="childrenCollgeFundingTooltip"
                toggle={() =>
                  toggleTooltipState('childrenCollgeFundingTooltip')
                }
                isOpen={tooltipStates['childrenCollgeFundingTooltip']}
                text={`College funding: Total projected college costs (tuition plus all other costs such as room and board, books, etc.), less current funds in the child’s name. The tuition amount being used is for the average 4-year education and is provided by The College Board, which is $158,072 for private institutions and $71,440 for public institutions.`}
              />
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md="4"></Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
};

EstimateFamilyExpenses.propTypes = {
  tooltipStates: PropTypes.object,
  toggleTooltipState: PropTypes.func
};
export default EstimateFamilyExpenses;
