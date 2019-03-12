import {
  update,
  evolve,
  not,
  append,
  remove,
  propEq,
  filter,
  findIndex,
  find
} from 'ramda';

function reducer(state, action) {
  const { type, payload } = action;
  console.log('type: ', type);
  console.log('payload: ', payload);

  switch (type) {
    case 'TOGGLE': {
      const withId = propEq('id', payload);
      const index = findIndex(withId, state);
      const task = find(withId, state);
      return update(index, evolve({ accepted: not }, task), state);
    }
    case 'ADD': {
			const task = payload;
      return append(task, state);
    }
    case 'DELETE': {
			const index = findIndex(propEq('id', payload));
      return remove(index, state);
    }
    default: {
      return state;
    }
  }
}

export const getAcceptedTasks = state => {
  const isAccepted = propEq('accepted', true);
  return filter(isAccepted, state);
};

export default reducer;
