import React from 'react';
import R from 'ramda';
import Rx from 'rxjs';

import * as state from './state.js';

import { Wrapper, Body } from './styles.js';

const answerUrl = (id) => `https://api.stackexchange.com/2.2/answers/${id}?order=desc&sort=activity&site=stackoverflow&filter=!7goSfuhAv_C5RE)okl(*eHtIxef.69*6ST`;
const fetchAnswer$ = (questionId) => Rx.Observable
  .ajax({
    url: answerUrl(questionId),
    method: 'GET',
    crossDomain: true,
  })
  .retry(3)
  .map(R.path(['response', 'items', 0]));

class Answer extends React.Component {
  state = {
    data: {},
  }

  static contextTypes = {
    router: React.PropTypes.object,
  }

  subject = new Rx.Subject()

  componentDidMount() {
    const { answerId } = this.context.router.route.match.params;
    const data$ = this.subject.switchMap(fetchAnswer$);
    
    this.sub = data$.subscribe(this.onData, this.onError);

    if (answerId) {
      this.subject.next(answerId);
    }
  }

  onData = (data) => {
    this.setState(state.data(data));
  }

  onError = (err) => {
    this.setState(state.error(err));
  }

  componentWillReceiveProps() {
    this.subject.next(this.context.router.route.match.params.answerId);
  }

  componentWillUnmount() {
    this.sub.unsubscribe();
  }

  render() {
    const { body, error } = this.state.data;
    return (
      <Wrapper>
        {error
          ? <div>{error}</div>
          : <Body dangerouslySetInnerHTML={{ __html: body }} />
        }
      </Wrapper>
    );
  }
}

Answer.propTypes = {
  body: React.PropTypes.string,
};

export default Answer;
