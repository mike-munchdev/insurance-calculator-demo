import React from 'react';

import PropTypes from 'prop-types';

import {
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';
import { MDTooltip } from '../Tooltips';

const MDMoneyTextField = ({
  handleChange,
  values,
  id,
  toggleTooltip,
  isTooltipOpen,
  errors,
  tooltipText,
  label,
  placeholder,
  prependText,
  appendText
}) => (
  <FormGroup>
    <Label for="currentSavingsInvestments">{label}</Label>
    <InputGroup>
      {prependText && (
        <InputGroupAddon addonType="prepend">{prependText}</InputGroupAddon>
      )}
      {appendText && (
        <InputGroupAddon addonType="append">{appendText}</InputGroupAddon>
      )}
      <Input
        placeholder={placeholder}
        type="text"
        id={id}
        onChange={handleChange}
        value={values[id] || ''}
      />
      {toggleTooltip && tooltipText ? (
        <MDTooltip
          target={`${id}Tooltip`}
          toggle={toggleTooltip}
          isOpen={isTooltipOpen}
          text={tooltipText}
        />
      ) : (
        <div className="md-tooltip-placeholder ml-2" />
      )}
    </InputGroup>
    {errors[id] ? <div className="text-danger">{errors[id]}</div> : null}
  </FormGroup>
);
export default MDMoneyTextField;

MDMoneyTextField.propTypes = {
  handleChange: PropTypes.func,
  values: PropTypes.object,
  toggleTooltip: PropTypes.func,
  tooltipStates: PropTypes.object,
  errors: PropTypes.object,
  id: PropTypes.string,
  isTooltipOpen: PropTypes.bool,
  tooltipText: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prependText: PropTypes.string,
  appendText: PropTypes.string
};
