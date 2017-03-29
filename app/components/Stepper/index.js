import React from 'react';

import Step from './Step';

const validateSteps = (props, propName, componentName) => {
  if (props[propName].length < 2 || props[propName].length > 5)
    return new Error(
      `Prop \`${propName}\` supplied to ${componentName} must contain between 2 and 5 items. Validation failed.`
    );
};

const setCurrent = (current) => () => ({ current });
const resetCurrent = () => ({ current: 0 });
const next = (state, props) => ({
  current: (state.current + 1) > (props.steps.length - 1)
    ? state.current
    : (state.current + 1),
});
const prev = (state) => ({
  current: (state.current - 1) < 0
    ? state.current
    : (state.current - 1),
});

class Stepper extends React.Component {
  state = {
    current: 0,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.steps.length !== this.props.steps.length) this.setState(resetCurrent);
  }

  handleClickStep = (index) => {
    this.setState(setCurrent(index));
  }

  renderStep = (label, i) => {
    return (
      <Step
        key={i}
        selected={(this.state.current) > (i - 1)}
        label={label}
        onClick={() => this.handleClickStep(i)}
      />
    );
  }

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

Stepper.propTypes = {
  steps: validateSteps,
}

export default Stepper;
