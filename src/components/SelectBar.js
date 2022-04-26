import React, { useState, useEffect } from 'react';
import '../styles/Categories.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SelectBar() {
  const sampleCategory = [
    {
      id: '',
      name: '',
    },
  ];

  const [selectedCat, setSelectedCat] = useState(sampleCategory);
  /* const [results, setResults] = useState([]); */

  useEffect(() => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then((res) => setSelectedCat(res.data.trivia_categories));
  }, []);

  return (
    <div>
      <div className="select-bar">
        <select
          name="category-selection"
          onChange={(e) => setSelectedCat(e.target.value)}
          value={selectedCat}
        >
          <option key={''} value={''}>
            --Choose a category--
          </option>
          {selectedCat.map((label) => (
            <option key={label.id} value={label.name}>
              {label.name}
            </option>
          ))}
        </select>
      </div>
      <Link to="/QuizAPI">
        <div className={!selectedCat ? '' : 'category-box'}>
          <h1>{`Quizz ${selectedCat.name}`}</h1>
        </div>
      </Link>
    </div>
  );
}

export default SelectBar;
