import Select from 'react-select';
import React, { useState } from 'react';
import '../styles/Categories.css';
import { Link } from 'react-router-dom';

function SelectBar() {
  const categories = [
    { label: 'General Knowledge', value: 1 },
    { label: 'Entertainment: Books', value: 2 },
    { label: 'Entertainment: Film', value: 3 },
    { label: 'Entertainment: Music', value: 4 },
    { label: 'Entertainment: Musicals & Theatres', value: 5 },
    { label: 'Entertainment: Television', value: 6 },
    { label: 'Entertainment: Video Games', value: 7 },
    { label: 'Entertainment: Board Games', value: 8 },
    { label: 'Science & Nature', value: 9 },
    { label: 'Science: Computers', value: 10 },
    { label: 'Science: Mathematics', value: 11 },
    { label: 'Mythology', value: 12 },
    { label: 'Sports', value: 13 },
    { label: 'Celebrities', value: 14 },
    { label: 'Animals', value: 15 },
    { label: 'Vehicles', value: 16 },
    { label: 'Entertainment: Comics', value: 17 },
    { label: 'Science: Gadgets', value: 18 },
    { label: 'Entertainment: Japanese Anime & Mangas', value: 19 },
    { label: 'Entertainment: Cartoon & Animations', value: 20 },
  ];

  const [selectedCat, setSelectedCat] = useState(categories.label);

  const change = (e) => {
    setSelectedCat(e.label, e.value);
  };

  return (
    <div>
      <div className="select-bar">
        <select name="" id="" onChange={change}>
          <option
            key={categories.value}
            value={categories.value}
            onChange={change}
          >
            {categories.label}
          </option>
        </select>
        <Select
          options={categories}
          onChange={change}
          className="react-select"
        />
      </div>
      <Link to="/QuizAPI">
        <div className={!selectedCat ? '' : 'category-box'}>
          <h1>{!selectedCat ? '' : `Quizz ${selectedCat}`}</h1>
        </div>
      </Link>
    </div>
  );
}

export default SelectBar;
