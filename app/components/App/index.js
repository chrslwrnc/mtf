import React from 'react';
import { Route } from 'react-router-dom';

import routes from 'routes.js';

import { Wrapper } from './styles.js';
import SearchBar from 'components/SearchBar';

const renderRoute = (route, i) => <Route key={i} {...route} />;

const App = () => (
  <Wrapper>
    <SearchBar />
    {routes.map(renderRoute)} 
  </Wrapper>
);

export default App;
