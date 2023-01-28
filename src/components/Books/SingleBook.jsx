import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../../redux/books/books';

const SingleBook = ({
  id,
  title,
  author,
  percentage,
  chapterSlogan,
  chapterTitle,
  category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBookFromAPI(id));
  };

  return (
    <li className="list-container">
      <div className="book-container">
        <div className="book-content">
          <div>
            <h4 className="book-category">{category}</h4>
            <h2 className="book-title">{title}</h2>
            <h6 className="book-author">{author}</h6>
            <div className="action-buttons">
              <button type="button" className="button-outline">
                Comments
              </button>
              <div className="vertical-divider" />
              <button
                type="button"
                onClick={handleRemoveBook}
                className="button-outline"
              >
                Remove
              </button>
              <div className="vertical-divider" />
              <button type="button" className="button-outline">
                Edit
              </button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div>
              <p className="percentage-complete">
                {percentage}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="chapter-slogan">{chapterSlogan}</p>
                <p className="chapter-title">{chapterTitle}</p>
              </div>
              <div>
                <button type="button" className="primary-button">
                  Update Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  chapterSlogan: PropTypes.string.isRequired,
  chapterTitle: PropTypes.string.isRequired,
};

export default SingleBook;
