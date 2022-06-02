import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import './App.css';
import Books from './pages/Books';

const App = () => (
  <div className="App">
    <nav className="navMenu">
      <div className="leftNav">
        <h1>Bookstore</h1>
        <ul className="ulMenu">
          <li className="link"><Link to="/">Books</Link></li>
          <li className="link"><Link to="Categories">Categories</Link></li>
        </ul>
      </div>
      <div className="rigthNav"><CgProfile size="2em" /></div>
    </nav>
    <Books />
    {/* <Routes>
      <Route path="/" element={<Books />} />
      <Route path="Calculator" element={<Categories />} />
    </Routes> */}
  </div>
);

export default App;
