import React from 'react';
import Rx from 'rxjs';
import R from 'ramda';

import { Wrapper, Input } from './styles.js';

import * as state from 'state.js';

const apiUrl = 'https://api.stackexchange.com/2.2/search?order=desc&sort=votes&site=stackoverflow&pagesize=1&intitle=';
const fetchMovies = (query) => Rx.Observable
  .ajax({
    url: apiUrl + query,
    method: 'GET',
    crossDomain: true
  })
  .retry(3);

class SearchBar extends React.Component {
  // static propTypes = {
  //   steps: validateSteps,
  // }

  state = {
    query: '',
    results: [],
  }

  setup = e => {
    const search$ = Rx.Observable
      .fromEvent(e, 'keyup')
      .map(R.path(['target', 'value']))
      .filter(query => query.length > 2)
      .debounceTime(100)
      .distinctUntilChanged()
      .switchMap(fetchMovies)
      .map(R.path(['response', 'items']));

    this.sub = search$
      .subscribe(results => {
        console.log(results);
        // this.setState({ results });
      });
  }

  componentWillUnmount() {
    this.sub.unsubscribe();
  }

  handleChange = (e) => {
    this.setState(state.update(e.target.name, e.target.value));
  }

  // renderStep = (label, i) => (
  //   <Step
  //     key={i}
  //     selected={(this.state.current) > (i - 1)}
  //     label={label}
  //     onClick={() => this.handleClickStep(i)}
  //   />
  // );

  render() {
    // const { steps } = this.props;
    const { query } = this.state;

    return (
      <Wrapper>
        <Input
          type="text"
          innerRef={this.setup}
          name="query"
          value={query}
          placeholder="Search"
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export default SearchBar;
