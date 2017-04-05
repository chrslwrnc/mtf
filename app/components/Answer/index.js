import React from 'react';
import R from 'ramda';
import Rx from 'rxjs';

import withFetchData from 'components/withFetchData';
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

const Answer = ({ body }) => (
  <Wrapper>
		<Body dangerouslySetInnerHTML={{ __html: body }} />
  </Wrapper>
);

Answer.propTypes = {
  body: React.PropTypes.string,
};

export default withFetchData(Answer, fetchAnswer$);
