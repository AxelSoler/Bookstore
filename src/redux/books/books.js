const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const booksArray = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const booksReducer = (state = booksArray, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  book: { id, title, author },
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default booksReducer;
