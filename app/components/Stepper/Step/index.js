import React from 'react';

import * as styles from './styles.js';

const Step = ({ selected = false, label, onClick }) => (
	<styles.Step onClick={onClick} selected={selected}>
		<styles.Label>{label}</styles.Label>
	</styles.Step>
);

Step.propTypes = {
	selected: React.PropTypes.bool,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default Step;
