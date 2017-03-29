import React from 'react';

const Step = ({ selected = false, label, onClick }) => (
	<div
		className={`Stepper-step${selected ? ' is-selected' : ''}`}
		onClick={onClick}
	>
		<span>{label}</span>
	</div>
);

Step.propTypes = {
	selected: React.PropTypes.bool,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

export default Step;
