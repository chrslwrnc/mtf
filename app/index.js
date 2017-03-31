import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'style.js';
import Stepper from 'components/Stepper';

const render = (Component, props) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Stepper, { steps: [ 'Design', 'Build', 'Deploy' ] });

if (module.hot) {
  module.hot.accept('components/Stepper', () => { render(Stepper, { steps: [ 'Design', 'Build', 'Deploy' ] }) })
}
