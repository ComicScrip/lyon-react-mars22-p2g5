/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import '../styles/Categories.css';
import axios from 'axios';
import { useLocalStorage } from 'react-use';

function SelectBar() {
  const [selectedCat, setSelectedCat] = useState([]);
  const [category, getCategory] = React.useState(false);
  const [storedCategory, getstoredCategory] = useLocalStorage('category');

  const handleChange = (e) => {
    const cat = e.target.value;
    getCategory(cat);
  };

  const handleClick = (e) => {
    const newArray = [];
    const cat = e.target.id;
    // eslint-disable-next-line array-callback-return
    selectedCat.map((array) => {
      if (array.name.includes(cat)) {
        newArray.push(array);
      }
    });
    getstoredCategory(newArray);
    localStorage.setItem(JSON.stringify(storedCategory));
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
      <div
        className={!category ? '' : 'category-box'}
        id={category}
        onClick={handleClick}
      >
        <h1 className="category-title">{category}</h1>
      </div>
      <div className="box">
        {!category
          ? selectedCat.map((cat) => (
              // eslint-disable-next-line react/jsx-indent
              <div className="category-box" id={cat.name} onClick={handleClick}>
                <h1 className="category-title">{cat.name}</h1>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
}

export default SelectBar;
