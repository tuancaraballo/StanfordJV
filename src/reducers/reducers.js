import { combineReducers } from 'redux';
import _ from 'lodash';

function addPostReducer(state = {}, action){
  switch (action.type) {
    case "ADD_POST":
      return {... state, [action.post.id] : action.post};
      break;
    default:
  }
  return state;
}

// NOTE: check lesson #21 on how to use lodash to make a map
function fetchPostReducer(state = {}, action){
  console.log("FetchPostReducer", action);
  switch (action.type) {
    case 'FETCH_POST':
      return { ... state, ... action.posts};
      break;
    default:
  }
  return state;
  console.log("Here is the state now", state);
}

const rootReducer = combineReducers({
  post : addPostReducer,
  posts: fetchPostReducer,
});

export default rootReducer;
