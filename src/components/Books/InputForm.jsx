import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const InputForm = () => {
  const [state, setState] = useState({
    id: 0,
    title: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();

  // Validate input fields
  const validate = () => {
    if (state.title && state.author && state.category) {
      return true;
    }
    return false;
  };

  const handleBookAddition = (e) => {
    e.preventDefault();
    dispatch(addBook(state));
    // validate input fields
    if (validate()) {
      setState({
        id: state.id + 1,
        title: '',
        author: '',
        category: '',
      });
    }
  };

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };

  const handleAuthorChange = (e) => {
    setState({ ...state, author: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleBookAddition}>
        <div>
          <input
            type="text"
            placeholder="Enter Title"
            onChange={handleTitleChange}
            value={state.title}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Author"
            onChange={handleAuthorChange}
            value={state.author}
          />
        </div>
        <select>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default InputForm;
