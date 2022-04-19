import Select from 'react-select';
import React, { useState } from 'react';

function SelectBar() {
  const categories = [
    { label: 'Movies', value: 1 },
    { label: 'Geography', value: 2 },
    { label: 'Science & nature', value: 3 },
    { label: 'Music', value: 4 },
    { label: 'Animals', value: 5 },
  ];

  const [cat, setCat] = useState(false);

  return (
    <div>
      <div>
        <Select options={categories} onChange={() => setCat(!cat)} />
      </div>
      <div>{cat ? 'Hello' : ''}</div>
    </div>
  );
}

export default SelectBar;
