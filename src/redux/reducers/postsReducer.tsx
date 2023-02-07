import Types from "../types";
//initial state of this reducer
const initialState = {
  posts: [],
};

//recieve state and edit the data based on the recieved action
const postsReducer = (state = initialState, action: { type: string, payload: object }) => {
  switch (action.type) {
    //save posts changes action
    case Types.SAVE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
