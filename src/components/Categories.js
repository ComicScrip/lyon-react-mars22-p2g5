import React from 'react';
import SelectBar from './SelectBar';
import Slider from './Slider';

function Categories() {
  return (
    <div>
      <div className="Carrousel">
        <Slider />
      </div>
      <div className="Selectbar" />
      <SelectBar />
    </div>
  );
}

export default Categories;
