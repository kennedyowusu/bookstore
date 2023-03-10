import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToAPI } from '../../redux/books/books';
import '../../styles/input_field.css';

const InputForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookToAPI({
      title: title.trim(),
      author: author.trim(),
      category: category.trim(),
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="form-container">
      <hr className="horizontal-divider" />
      <p className="form-title">Add New Book</p>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className="title"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
          className="author"
          required
        />
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category"
        >
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button type="submit" className="primary-button-big">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default InputForm;
