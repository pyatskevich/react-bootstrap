import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';

import { createBootstrapComponent } from './ThemeProvider';

const propTypes = {
  /**
   * @default {'form'}
   */
  bsPrefix: PropTypes.string,

  /**
   * The Form `ref` will be forwarded to the underlying form element,
   * which means, unless `componentClass` is a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias innerRef
   */
  ref: PropTypes.any,

  /**
   * Display the series of labels, form controls,
   * and buttons on a single horizontal row
   */
  inline: PropTypes.bool,

  componentClass: elementType
};

const defaultProps = {
  inline: false,
  componentClass: 'form'
};

function Form({
  bsPrefix,
  inline,
  className,
  innerRef, // eslint-disable-line
  componentClass: Component,
  ...props
}) {
  return (
    <Component
      {...props}
      ref={innerRef}
      className={classNames(className, inline && `${bsPrefix}-inline`)}
    />
  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default createBootstrapComponent(Form, 'form');
