export function reducer(state, action) {
  switch (action.type) {
    case 'open modal save pin':
      return {
        ...state,
        mode: 'savePin'
      }
    default: 
      return state;
  }
}
