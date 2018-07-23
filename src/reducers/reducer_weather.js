import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // set up a switch statement to only handle weather change actions
  switch (action.type) {
    case FETCH_WEATHER:
      // this is inside an array because we have multiple cities. we're only holding onto payload.data becuase its' all we really care about.
      // make a new array, toss in action.payload.data, and take all entries from state and flatten into surrounding array
      return [ action.payload.data, ...state];
  }
  // we have a simple reducer that takes an action and keeps the state as is for now
  // redux promise intercepts this request before it gets here and resolves the promise for us so that the promise can be resolved before the reducer runs. this doesn't look synchronous but it actually just handles it for us.
  return state;
}
