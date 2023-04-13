import React from 'react';
import '../css/card.css'

const Card = ({urlImg, nombre, profesion}) => {
  return (
    <div className='card__container'>
      <div className='top__box'></div>
      <img src={urlImg} width="120" height="120" alt='instructor' className='img__card'/>
      <h2 className='nombre__card'>{nombre}</h2>
      <h4 className='profesion__card'>{profesion}</h4>
    </div>
  );
};

export default Card;
