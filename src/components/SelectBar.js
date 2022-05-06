/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import '../styles/Categories.css';
import axios from 'axios';
import { useLocalStorage } from 'react-use';
import Popup from './Popup';

function SelectBar() {
  const [selectedCat, setSelectedCat] = useState([]);
  const [category, getCategory] = React.useState(false);
  const [storeCategory, setStoreCategory] = useLocalStorage('category', []);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const cat = e.target.value;
    getCategory(cat);
  };
  const handleClick = (categoryName) => {
    const newArray = selectedCat.filter(
      (object) => object.name === categoryName
    );
    setStoreCategory(newArray);
    setShowPopup(true);
    console.log(storeCategory);
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
        id={category.toString()}
        // onClick={handleClick}
      >
        <h1 className="category-title">{category}</h1>
      </div>
      <div className="box">
        {!category
          ? selectedCat.map((cat) => (
              // eslint-disable-next-line react/jsx-indent
              <div
                key={cat.name}
                className="category-box"
                id={cat.name}
                onClick={() => handleClick(cat.name)}
              >
                <h1 className="category-title">{cat.name}</h1>
              </div>
            ))
          : ''}
      </div>
      <Popup show={showPopup} setShow={setShowPopup} />
    </div>
  );
}

export default SelectBar;
