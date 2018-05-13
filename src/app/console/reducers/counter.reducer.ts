import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const handler = {
  [INCREMENT]: state => (state += 1),
  [DECREMENT]: state => (state -= 1),
  ['default']: state => state
};

export function counterReducer(state: number = 0, action: Action) {
  const resolveHandler = handler[action.type] || handler['default'];
  return resolveHandler(state);
}
