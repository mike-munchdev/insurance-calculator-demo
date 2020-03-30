import React from 'react';
import { Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';

const MDTooltip = ({ isOpen, toggle, text, target, delay }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        className="d-flex align-items-center justify-content-center ml-2 md-tooltip"
        href="#"
        id={target}
      >
        ?
      </div>
      <Tooltip
        placement="right"
        isOpen={isOpen}
        target={target}
        toggle={toggle}
        delay={delay ? { show: 0, hide: 1000000 } : { show: 0 }}
      >
        {text}
      </Tooltip>
    </div>
  );
};
export default MDTooltip;

MDTooltip.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
  text: PropTypes.string,
  delay: PropTypes.bool
};
