import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from 'routes.js';

import { Wrapper } from './styles.js';
import SearchBar from 'components/SearchBar';

const renderRoute = (route, i) => <Route key={i} exact={true} {...route} />;

const App = () => (
  <Wrapper>
    <SearchBar />

    <Router>
			{routes.map(renderRoute)} 
    </Router>
  </Wrapper>
);

export default App;
