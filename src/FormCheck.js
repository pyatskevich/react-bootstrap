import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';

import mapContextToProps from './utils/mapContextToProps';
import { createBootstrapComponent } from './ThemeProvider';
import FormContext from './FormContext';

class FormCheck extends React.Component {
  static propTypes = {
    /**
     * @default 'form-check'
     */
    bsPrefix: PropTypes.string,

    /**
     * The FormCheck `ref` will be forwarded to the underlying input element,
     * which means it will be a DOM node, when resolved.
     *
     * @type {ReactRef}
     * @alias {inputRef}
     */
    ref: PropTypes.any,

    /** A HTML id attribute, necessary for proper form accessibility. */
    id: PropTypes.string,

    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,

    /** The type of checkable. */
    type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
    isValid: PropTypes.bool.isRequired,
    isInvalid: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    type: 'checkbox',
    inline: false,
    disabled: false,
    isValid: false,
    isInvalid: false,
    title: '',
  };

  render() {
    const {
      id,
      bsPrefix,
      inline,
      disabled,
      isValid,
      isInvalid,
      inputRef, // eslint-disable-line react/prop-types
      className,
      style,
      title,
      type,
      children,
      ...props
    } = this.props;

    const hasChildren =
      children != null &&
      children !== false &&
      React.Children.count(children) > 0;

    return (
      <div
        style={style}
        className={classNames(
          className,
          bsPrefix,
          inline && `${bsPrefix}-inline`,
        )}
      >
        <input
          {...props}
          id={id}
          ref={inputRef}
          type={type}
          disabled={disabled}
          className={classNames(
            `${bsPrefix}-input`,
            isValid && 'is-valid',
            isInvalid && 'is-invalid',
            !hasChildren && 'position-static',
          )}
        />
        {hasChildren && (
          <label htmlFor={id} title={title} className={`${bsPrefix}-label`}>
            {children}
          </label>
        )}
      </div>
    );
  }
}

const mapContext = ({ controlId }, { id }) => {
  warning(
    controlId == null || !id,
    '`controlId` is ignored on `<FormControl>` when `id` is specified.',
  );
  return {
    id: id || controlId,
  };
};

export default mapContextToProps(
  createBootstrapComponent(FormCheck, {
    forwardRefAs: 'inputRef',
    prefix: 'form-check',
  }),
  FormContext.Consumer,
  mapContext,
);
