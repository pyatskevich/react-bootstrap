import classNames from 'classnames';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import React from 'react';

import { createBootstrapComponent } from './ThemeProvider';

const propTypes = {
  /** @default 'form-text' */
  bsPrefix: PropTypes.string,
  /**
   * The FormCheck `ref` will be forwarded to the underlying radio/checkbox element,
   * which means it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias {inputRef}
   */
  ref: PropTypes.any,

  /**
   * A convenience prop for add the `text-muted` class,
   * since it's so commonly used here.
   */
  muted: PropTypes.bool,
  componentClass: elementType,
};

const defaultProps = {
  componentClass: 'small',
};

function FormText({
  bsPrefix,
  className,
  componentClass: Component,
  innerRef, // eslint-disable-line react/prop-types
  ...props
}) {
  return (
    <Component
      {...props}
      ref={innerRef}
      className={classNames(className, bsPrefix)}
    />
  );
}

FormText.propTypes = propTypes;
FormText.defaultProps = defaultProps;

export default createBootstrapComponent(FormText, 'form-text');
