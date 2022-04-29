/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import '../styles/Categories.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SelectBar() {
  const [selectedCat, setSelectedCat] = useState([]);
  const [category, getCategory] = useState(false);

  const handleChange = (e) => {
    const cat = e.target.value;
    getCategory(cat);
  };

  useEffect(() => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then((res) => setSelectedCat(res.data.trivia_categories));
  }, []);

  return (
    <div>
      <div>
        <select
          className="select-bar"
          name="category-selection"
          value={category}
          onChange={handleChange}
        >
          <option key={''} value={''}>
            --All--
          </option>
          {selectedCat.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <Link to="/QuizAPI">
        <div className={!category ? '' : 'category-box'}>
          <h1 className="category-title">{category}</h1>
        </div>
        <div className="box">
          {!category
            ? selectedCat.map((cat) => (
                // eslint-disable-next-line react/jsx-indent
                <div className="category-box">
                  <h1 className="category-title">{cat.name}</h1>
                </div>
              ))
            : ''}
        </div>
      </Link>
    </div>
  );
}

export default SelectBar;
