import Types from "../types";
//initial state of this reducer
const initialState = {
  token: '',
};

//recieve state and edit the data based on the recieved action
const postsReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    //save login data action
    case Types.SAVE_LOGIN:
      return {
        ...state,
        token: 'logged',
      };

    //delete token action
    case Types.DELETE_LOGIN:
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};

export default postsReducer;
