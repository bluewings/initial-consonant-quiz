import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const initialState = {
  count: 0,
  level: 0.3,
} as {
  count: number;
  level: number;
};

const INCREASE = 'app/INCREASE';
const SET_LEVEL = 'app/SET_LEVEL';

export const increase = createAction(INCREASE, () => null);
export const setLevel = createAction(SET_LEVEL, (level: number) => ({ level }));

export default handleActions(
  {
    [INCREASE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.count++;
      }),
    [SET_LEVEL]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.level = payload.level;
      }),
  },
  initialState,
);
