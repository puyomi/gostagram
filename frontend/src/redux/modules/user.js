// imports

// actions

// action creators

// API actions

function facebookLogin(access_token) {
  return dispatch => {
    fetch("/users/login/facebook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    });
  };
}

// initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false
};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer functions

// exports

// reducer export

export default reducer;
