import Answer from 'components/Answer';

const routes = [
  {
    path: '/a/:answerId',
    component: Answer,
    exact: true,
  },
]

export default routes;
