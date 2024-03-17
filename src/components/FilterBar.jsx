import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filter';

const Filter = () => {
  const dispatch = useDispatch();
  const style = {
    marginBottom: 10,
  };

  const handleChange = (event) => {
    const keyword = event.target.value;
    dispatch(setFilter(keyword));
  };

  return (
    <div style={style}>
      filter
      <input
        style={{ backgroundColor: 'lightblue' }}
        type="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
