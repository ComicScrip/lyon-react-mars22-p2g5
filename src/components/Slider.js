import React, { useState } from 'react';
import '../styles/Slider.css';
import BtnSlider from './BtnSlider';
import dataSlider from './DataSlider';
import { Link } from 'react-router-dom';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => (
        <div
          key={obj.id}
          className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
        >
          <h1 className="card-title">{obj.title}</h1>
          <Link to="/QuizAPI">
            <img
              src={`${process.env.PUBLIC_URL}/img/img${index + 1}.png`}
              alt={'img'}
            />{' '}
          </Link>
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className="container-dots">
        {Array.from({ length: 4 })
          .map((_, i) => i)
          .map((item, index) => (
            // eslint-disable-next-line react/self-closing-comp
            <div
              key={item}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
              // eslint-disable-next-line react/jsx-closing-tag-location
            ></div>
          ))}
      </div>
    </div>
  );
}

export default Slider;
