import {INITIAL_STATE, next, setEntries, vote} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT':
      return next(state);
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'VOTE':
      return vote(state, action.entry);
  }

  return state;
}
