import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import home from '@home/store/reducer';
import books from '@books/store/reducer';

import { IMainState } from './types';

const rootReducer = combineReducers<IMainState>({
  home,
  books
});

export type RootState = StateType<typeof rootReducer>;
export default rootReducer;
