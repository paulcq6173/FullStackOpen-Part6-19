import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdote';
import { setNotification } from '../reducers/notification';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();

    const text = event.target.anecdote.value;
    event.target.anecdote.value = ''; // Clear input
    dispatch(createAnecdote(text));
    dispatch(setNotification(`new anecdote: ${text} created`, 5));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
