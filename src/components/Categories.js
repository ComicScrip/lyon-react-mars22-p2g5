import React from 'react';
import SelectBar from './SelectBar';
import Slider from './Slider';
import '../styles/Categories.css';

function Categories() {
  return (
    <div>
      <h1 className="carrousel-title">Les choix de l'Equipe</h1>
      <div className="carrousel">
        <Slider />
      </div>
      <h1 className="selectbar-title">Toutes les Catégories</h1>
      <div className="selectbar" />
      <SelectBar />
    </div>
  );
}

export default Categories;
