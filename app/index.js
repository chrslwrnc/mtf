import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import 'style.js';
import App from 'components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('app')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('components/App', () => { render(App) });
}
