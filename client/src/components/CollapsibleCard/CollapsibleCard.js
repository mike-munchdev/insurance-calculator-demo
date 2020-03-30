import React from 'react';
import { Card, CardHeader, CardBody, Collapse } from 'reactstrap';

import PropTypes from 'prop-types';

const CollapsibleCard = ({ id, toggle, name, children, isOpen }) => (
  <Card key={id}>
    <CardHeader
      onClick={toggle}
      data-event={id}
      className={isOpen && `selected`}
    >
      <div className="d-flex justify-content-between">
        <div>{name}</div>
        <div className={`indicator ${isOpen && 'selected'}`}>{id}</div>
      </div>
    </CardHeader>
    <Collapse isOpen={isOpen}>
      <CardBody>{children}</CardBody>
    </Collapse>
  </Card>
);
export default CollapsibleCard;

CollapsibleCard.propTypes = {
  toggle: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number,
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired
};
