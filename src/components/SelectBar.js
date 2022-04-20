import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import '../styles/Category.css';

function SelectBar() {
  const categories = [
    { label: 'Movies', value: 1 },
    { label: 'Geography', value: 2 },
    { label: 'Science & nature', value: 3 },
    { label: 'Music', value: 4 },
    { label: 'Animals', value: 5 },
  ];

  const [selectedCat, setSelectedCat] = useState(categories.label);

  useEffect(() => {
    console.log('Youhou you clicked');
  });

  const change = (e) => {
    setSelectedCat(e.label, e.value);
  };

  return (
    <div>
      <div>
        <Select options={categories} onChange={change} />
      </div>
      <div className={!selectedCat ? '' : 'category-box'}>
        <h1>{!selectedCat ? '' : `Quizz ${selectedCat}`}</h1>
      </div>
    </div>
  );
}

export default SelectBar;
