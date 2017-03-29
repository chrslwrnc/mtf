import React from 'react';

import Step from './Step';

import * as state from './state.js';

const validateSteps = (props, propName, componentName) => {
  if (props[propName].length < 2 || props[propName].length > 5)
    return new Error(
      `Prop \`${propName}\` supplied to ${componentName} must contain between 2 and 5 items. Validation failed.`
    );
};

class Stepper extends React.Component {
  static propTypes = {
    steps: validateSteps,
  }

  state = {
    current: 0,
  }

  componentWillReceiveProps(nextProps) {
    // if the number of steps has changed, should probably reset current index
    if (nextProps.steps.length !== this.props.steps.length) this.setState(state.resetCurrent);
  }

  handleClickStep = (index) => {
    this.setState(state.setCurrent(index));
  }

  renderStep = (label, i) => (
    <Step
      key={i}
      selected={(this.state.current) > (i - 1)}
      label={label}
      onClick={() => this.handleClickStep(i)}
    />
  );

  render() {
    const { steps } = this.props;
    const { current } = this.state;

    return (
      <div className="Stepper">
        <div
          className="Stepper-bar"
          style={{ width: `${ (100 / (steps.length - 1)) * (current) }%` }}
        />
        {steps.map(this.renderStep)}
      </div>
    );
  }
}

export default Stepper;
