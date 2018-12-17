const initialState = [];

export default function messagesList(state = initialState, action) {
    if (action.type === 'LOAD_MESSAGE') {
      return [...state, action.messageItem];
    } else if (action.type === 'DELETE_MESSAGE') {
      state.splice(action.index, 1);
      return [...state];
    }
    return state;
}

