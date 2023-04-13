import React from 'react';
import Card from './components/Card';
import './index.css';

const App = () => {
  return (
    <div>
      <div className='container__card'>
        <Card
          urlImg='/public/image/91544872.jpg'
          nombre='Genesis Rondón'
          profesion='Desarolladora de software e instructora'
        />
        <Card
          urlImg='/public/image/29123800.jpg'
          nombre='Christian Velasco'
          profesion='Head de Alura e instructor'
        />
        <Card
          urlImg='/public/image/75937414.jpg'
          nombre='Jose Gonzalez'
          profesion='Dev. FullStack'
        />
        <Card
          urlImg='/public/image/92184087.jpg'
          nombre='Jeanmarie Quijada'
          profesion='Instructora en Alura Latam'
        />
      </div>
    </div>
  );
};

export default App;
