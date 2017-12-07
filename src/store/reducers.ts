import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'eat pizza', completed: false }]
};

export function todoReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromActions.ADD_TODO: {
      console.log(action);
      const todo = action.payload;
      const data = [...state.data, todo];
      return { ...state, data };
    }
  }
  return state;
}
