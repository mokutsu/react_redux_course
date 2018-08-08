import _ from 'lodash';

import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
    // square braces is used for key interpolation. create a key on this object with key name of action.payload.data.id, and assign it the actual payload data
      return { ...state, [action.payload.data.id]: action.payload.data};

    case FETCH_POSTS:
      // console.log(action.payload.data); // expect array of post 1, post 2, etc
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
