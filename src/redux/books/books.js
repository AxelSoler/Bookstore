const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const booksArray = [];
const urlAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jtHTTFgRxzKLYPxv3yq7/books/';

const booksReducer = (state = booksArray, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book.id,
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOK:
      return [...state, ...action.payload];
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
    category: '',
  },
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export const getBook = (book) => ({
  type: GET_BOOK,
  payload: book,
});

export const getListBook = () => async (dispatch) => {
  const listBook = [];
  const response = await fetch(urlAPI);
  const res = await response.json();
  console.log(res);
  const id = Object.keys(res);
  const values = Object.values(res);
  values.forEach((element, index) => {
    listBook.push(
      {
        id: id[index],
        title: element[0].title,
        author: element[0].author,
        category: 'Action',
      },
    );
  });
  dispatch(getBook(listBook));
};

export default booksReducer;
