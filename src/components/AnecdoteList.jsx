import { useDispatch, useSelector } from 'react-redux';
import { updateAnecdote } from '../reducers/anecdote';
import { setNotification } from '../reducers/notification';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  let result;
  if (filter !== '') {
    result = anecdotes.filter((e) => e.content.includes(filter));
  } else {
    result = anecdotes;
  }

  const handleVote = (id) => {
    console.log('vote', id);
    const anecdote = anecdotes.find((e) => e.id === id);
    const newObj = { ...anecdote, votes: anecdote.votes + 1 };
    dispatch(updateAnecdote(newObj));

    dispatch(setNotification(`You voted: '${anecdote.content}'`, 5));
  };

  return (
    <div>
      {result.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
