import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: null,
};

const notifySlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    displayMessage(state, action) {
      const content = action.payload;
      const newState = {
        message: content,
      };
      return newState;
    },
    clearMessage() {
      return initialState;
    },
  },
});

export const setNotification = (text, sec) => {
  const timeMillis = sec * 1000;

  return async (dispatch) => {
    dispatch(displayMessage(text));
    setTimeout(() => {
      dispatch(clearMessage());
    }, timeMillis);
  };
};

export const { displayMessage, clearMessage } = notifySlice.actions;
export default notifySlice.reducer;
