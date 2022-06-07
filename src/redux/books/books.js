const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const booksArray = [];

const booksReducer = (state = booksArray, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book.id,
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addNewBook = (idNumber, titleBook, authorBook) => ({
  type: ADD_BOOK,
  book: {
    id: idNumber,
    title: titleBook,
    author: authorBook,
  },
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default booksReducer;
