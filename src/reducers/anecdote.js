import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdoteService';

//const getId = () => (100000 * Math.random()).toFixed(0);

/*const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};*/

const initialState = [];

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voting(state, action) {
      const id = action.payload;
      let objectToAdd = state.find((e) => e.id === id);
      objectToAdd = { ...objectToAdd, votes: objectToAdd.votes + 1 };
      const newState = state.map((e) => (e.id === id ? objectToAdd : e));
      return newState.sort((a, b) => b.votes - a.votes);
    },
    appendAnecdote(state, action) {
      state.concat(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const initializeNotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNewAnecdote(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateAnecdote = (newObject) => {
  const reqId = newObject.id;

  return async (dispatch) => {
    const newAnecdote = await anecdoteService.update(reqId, newObject);
    dispatch(voting(newAnecdote.id));
  };
};

export const { voting, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
