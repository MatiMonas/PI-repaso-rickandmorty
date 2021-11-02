import { GET_EPISODES } from '../actions/actionTypes';
import { GET_CHARACTERS } from '../actions/actionTypes';

const initialState = {
  characters: [],
  episodes: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };

    case GET_EPISODES:
      return {
        ...state,
        episodes: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
