import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import elementType from 'prop-types-extra/lib/elementType';

class Feedback extends React.Component {
  static propTypes = {
    /**
     * Specify whether the feedback is for valid or invalid fields
     *
     * @type {('valid'|invalid')}
     */
    type: PropTypes.string.isRequired,
    componentClass: elementType,
  };
  static defaultProps = {
    type: 'valid',
    componentClass: 'div',
  };

  render() {
    const { componentClass: Component, className, type, ...props } = this.props;

    return (
      <Component
        {...props}
        className={classNames(className, type && `${type}-feedback`)}
      />
    );
  }
}

export default Feedback;
