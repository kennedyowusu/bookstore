import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToAPI } from '../../redux/books/books';

const InputForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');
  const [validateForm, setValidateForm] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || author === '') {
      setValidateForm(true);
    } else {
      setValidateForm(false);
      dispatch(addBookToAPI({
        title: title.trim(),
        author: author.trim(),
        category: category.trim(),
      }));
      setTitle('');
      setAuthor('');
      setCategory('');
      console.log(`${title}, ${author}, ${category}`);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="title" type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
        <input type="text" placeholder="Author" value={author} onChange={handleAuthorChange} />
        <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button type="submit">Add Book</button>
        {
          validateForm
            ? (
              <p className="error" style={{ color: 'red' }}>
                Please fill in all fields
              </p>
            )
            : null
        }
      </form>
    </div>
  );
};

export default InputForm;
