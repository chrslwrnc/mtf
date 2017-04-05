import React from 'react';
import Rx from 'rxjs';
import R from 'ramda';

import { Wrapper, Input } from './styles.js';

import * as state from 'state.js';

const questionsUrl = (query, offset = 1) => `https://api.stackexchange.com/2.2/search?pagesize=1&order=desc&sort=votes&page=${offset}&intitle=${query}&site=stackoverflow&filter=!-W2e9m3q4RX(k7OzjJSS`;
const fetchQuestions = (query) => Rx.Observable
  .ajax({
    url: questionsUrl(query),
    method: 'GET',
    crossDomain: true,
  })
  .retry(3);

class SearchBar extends React.Component {
  static propTypes = {
    setAnswer: React.PropTypes.func,
  }

  static contextTypes = {
    router: React.PropTypes.object,
  }

  state = {
    isFocused: false,
    query: '',
  }

  setup = e => {
    e.focus();

    const question$ = Rx.Observable
      .fromEvent(e, 'keyup')
      .map(R.path(['target', 'value']))
      .filter(query => query.length > 2)
      .debounceTime(100)
      .distinctUntilChanged()
      .switchMap(fetchQuestions)
      .map(R.path(['response', 'items', 0, 'accepted_answer_id']));

    this.sub = question$
      .subscribe(this.navigateToAnswer);
  }

  navigateToAnswer = (id) => {
    if (id) this.context.router.history.push(`/a/${id}`);
  }

  handleFocus = () => {
    this.setState(state.update('isFocused', true));
  }

  handleBlur = () => {
    this.setState(state.update('isFocused', false));
  }

  handleChange = (e) => {
    this.setState(state.update(e.target.name, e.target.value));
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  componentWillUnmount() {
    this.sub.unsubscribe();
  }

  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit} isFocused={this.state.isFocused}>
        <Input
          type="text"
          innerRef={this.setup}
          name="query"
          placeholder="Search"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </Wrapper>
    );
  }
}

export default SearchBar;
