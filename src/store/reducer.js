import * as types from './types';

export function reducer(state, action) {
  switch (action.type) {
    case types.openModalSavePinType:
      return {
        ...state,
        mode: 'savePin'
      }
    case types.closeModalsType:
      return {
        ...state,
        mode: null
      };
    case types.fetchFoldersInitType:
      return {
        ...state
      }
    case types.fetchFoldersSuccessType:
      return {
        ...state,
        folders: action.payload
      }
    default: 
      return state;
  }
}
