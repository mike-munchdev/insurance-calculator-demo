import * as yup from 'yup';

const mustBeNumeric = 'Field must be a number';
const fieldRequired = 'Field is required';

export const calculatorSchema = yup.object().shape({
  finalExpenses: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  oustandingDebts: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  outstandingMortgage: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  totalAnnualIncome: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  currentSavingsInvestments: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  lifeInsuranceValue: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  yearsOfIncome: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  currentRetirementSavings: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  spouseAnnualIncome: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  spouseMarginalTaxRate: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  spouseExpectedWorkYears: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  estimatedInflationRate: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired),
  afterTaxNetInvestmentYield: yup
    .string()
    .matches(/^[0-9]*$/, { message: mustBeNumeric })
    .required(fieldRequired)
});
