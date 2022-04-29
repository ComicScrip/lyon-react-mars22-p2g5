import React from 'react';
import rightArrow from '../img/fleche.png';
import leftArrow from '../img/fleche2.png';
import '../styles/Slider.css';

function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      type="button"
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      onClick={moveSlide}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} alt="fleche" />
    </button>
  );
}

export default BtnSlider;
