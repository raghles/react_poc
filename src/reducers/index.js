function rootReducer(state = {userName: "Guest"}, action) {
  if (action.type === "REGISTER") {    
    let reg = action.payload;
    return Object.assign({}, state, reg);
  }
  return state;
}

export default rootReducer;
