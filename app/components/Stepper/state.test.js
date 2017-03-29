import { resetCurrent, setCurrent } from './state.js';

test('resetCurrent() ', () => {
	const state = { current: 3 };
	const props = { steps: [ 'one', 'two', 'three', 'four' ] };
	const expectedState = { current: 0 };

  expect(resetCurrent(state, props)).toEqual(expectedState);
});

test('setCurrent() ', () => {
	const state = { current: 0 };
	const props = { steps: [ 'one', 'two', 'three', 'four' ] };
	const expectedState = { current: 1 };

  expect(setCurrent(2)(state, props)).toEqual(expectedState);
});
