import React, { useState } from 'react';
import { Container, Row, Button, Form } from 'reactstrap';
import { Formik } from 'formik';
import { CollapsibleCard } from './components/CollapsibleCard';
import './App.css';
import {
  EstimateFamilyExpenses,
  TotalAnnualIncome,
  AssumingSpouseWorks,
  Extras,
  Analysis
} from './components/Insurance';
import { calculatorSchema } from './components/Insurance/validation/calculatorSchema';
const cards = [
  { id: 1, name: "Estimate your family's expenses in case of your death" },
  {
    id: 2,
    name: 'Total annual income your family would need if you died today'
  },
  { id: 3, name: 'Assuming your spouse would work following your death' },
  { id: 4, name: 'Extras' },
  { id: 5, name: 'Analysis' }
];

const initialTooltipState = {
  finalExpensesTooltip: false,
  oustandingDebtsTooltip: false,
  outstandingMortgageTooltip: false,
  childrenCollgeFundingTooltip: false,
  totalAnnualIncomeTooltip: false,
  currentSavingsInvestmentsTooltip: false,
  lifeInsuranceValueTooltip: false,
  currentRetirementSavingsTooltip: false,
  spouseMarginalTaxRateTooltip: false
};

function App() {
  const [openId, setOpenId] = useState(0);
  const [tooltipStates, settooltipStates] = useState(initialTooltipState);

  const toggleTooltipState = key =>
    settooltipStates({ ...initialTooltipState, [key]: !tooltipStates[key] });

  const getControl = (id, formikProps) => {
    switch (id) {
      case 1:
        return (
          <EstimateFamilyExpenses
            {...formikProps}
            tooltipStates={tooltipStates}
            toggleTooltipState={toggleTooltipState}
          />
        );
      case 2:
        return (
          <TotalAnnualIncome
            {...formikProps}
            tooltipStates={tooltipStates}
            toggleTooltipState={toggleTooltipState}
          />
        );
      case 3:
        return (
          <AssumingSpouseWorks
            {...formikProps}
            tooltipStates={tooltipStates}
            toggleTooltipState={toggleTooltipState}
          />
        );
      case 4:
        return (
          <Extras
            {...formikProps}
            tooltipStates={tooltipStates}
            toggleTooltipState={toggleTooltipState}
          />
        );
      case 5:
        return (
          <Analysis
            {...formikProps}
            initialTooltipState={initialTooltipState}
            toggleTooltipState={toggleTooltipState}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={{
        finalExpenses: '',
        oustandingDebts: '',
        outstandingMortgage: '',
        childrenCollgeFunding: '',
        totalAnnualIncome: '',
        currentSavingsInvestments: '',
        lifeInsuranceValue: '',
        yearsOfIncome: '',
        currentRetirementSavings: '',
        spouseAnnualIncome: '',
        spouseMarginalTaxRate: '',
        spouseExpectedWorkYears: '',
        estimatedInflationRate: '',
        afterTaxNetInvestmentYield: ''
      }}
      validationSchema={calculatorSchema}
      onSubmit={(values, { props, resetForm, setErrors, setSubmitting }) => {
        alert('submitting successful form');
      }}
      render={formikProps => {
        const { isSubmitting, handleSubmit } = formikProps;

        return (
          <Form onSubmit={handleSubmit}>
            <Container>
              {cards.map(c => (
                <CollapsibleCard
                  toggle={() => setOpenId(c.id)}
                  id={c.id}
                  name={c.name}
                  isOpen={c.id === openId}
                >
                  {getControl(c.id, formikProps)}
                </CollapsibleCard>
              ))}
              <Row className="d-flex align-items-center justify-content-center">
                <Button
                  className="form-button mx-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
                <Button
                  className="form-button mx-2"
                  type="reset"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </Row>
            </Container>
          </Form>
        );
      }}
    />
  );
}

export default App;
