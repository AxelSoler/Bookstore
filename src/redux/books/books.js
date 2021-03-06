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

export const addBookAPI = (items) => async (dispatch) => {
  const res = await fetch(urlAPI, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        item_id: items.id,
        title: items.title,
        author: items.author,
        category: '',
      },
    ),
  });
  if (res.status === 201) {
    dispatch(addNewBook(items));
  }
};

export const deleteBookAPI = (itemid) => async (dispatch) => {
  const deleteItemAPI = urlAPI + itemid;
  const res = await fetch(deleteItemAPI, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (res.status === 201) {
    dispatch(deleteBook(itemid));
  }
};

export const getListBook = () => async (dispatch) => {
  const listBook = [];
  const response = await fetch(urlAPI);
  const res = await response.json();
  const id = Object.keys(res);
  const values = Object.values(res);
  values.forEach((element, index) => {
    listBook.push(
      {
        id: id[index],
        title: element[0].title,
        author: element[0].author,
        category: '',
      },
    );
  });
  dispatch(getBook(listBook));
};

export default booksReducer;
