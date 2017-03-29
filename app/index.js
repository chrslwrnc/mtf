import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Stepper from 'components/Stepper';

render(
	<Stepper steps={[ 'Design', 'Build', 'Deploy' ]} />,
  document.getElementById('app'),
);
