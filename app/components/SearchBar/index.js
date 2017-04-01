import React from 'react';
import Rx from 'rxjs';

import { Wrapper, Input } from './styles.js';

import * as state from 'state.js';

const apiUrl = 'https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow';
const fetchMovies = (query) => Rx.Observable
  .ajax({
    url: apiUrl,// + query,
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
  }

  // componentDidMount() {
  //   const url = 'https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow';
  //   const requestStream = Rx.Observable.of(url);
  //   const responseStream = requestStream
  //     .flatMap(requestUrl =>
  //       Rx.Observable.fromPromise(fetch(requestUrl))
  //     );
  //   responseStream.subscribe(response => {
  //     console.log(response.json());
  //   });
  // }

  componentDidMount() {
    const search$ = Rx.Observable
      .fromEvent(this.input, 'change')
      .map(({ target }) => target.value)
      .filter(query => query.length > 2)
      .debounceTime(100)
      .distinctUntilChanged()
      .switchMap(query => fetchMovies(query))
      // .map(res => res);

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
          ref={e => this.input = e}
          name="query"
          value={query}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export default SearchBar;
