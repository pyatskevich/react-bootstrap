import classNames from 'classnames';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import React from 'react';

import FormContext from './FormContext';
import { createBootstrapComponent } from './ThemeProvider';

const propTypes = {
  /**
   * @default 'form-group'
   */
  bsPrefix: PropTypes.string,

  componentClass: elementType,

  /**
   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
   */
  controlId: PropTypes.string
};

const defaultProps = {
  componentClass: 'div'
};

function FormGroup({
  bsPrefix,
  innerRef, // eslint-disable-line react/prop-types
  className,
  children,
  componentClass: Component,
  controlId,
  ...props
}) {
  return (
    <FormContext.Provider value={{ controlId }}>
      <Component
        {...props}
        ref={innerRef}
        className={classNames(className, bsPrefix)}
      >
        {children}
      </Component>
    </FormContext.Provider>
  );
}

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default createBootstrapComponent(FormGroup, 'form-group');
