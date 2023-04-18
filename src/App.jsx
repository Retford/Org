import React from 'react';
import Card from './components/Card';
import './index.css';
import Header from './components/Header';
import Forms from './components/Forms';

const App = () => {
  return (
    <>
      <Header />
      <section className='main'>
        <Forms />
      </section>
      <div className='container__card'>
        <Card
          urlImg='/img/91544872.jpg'
          nombre='Genesis Rondón'
          profesion='Desarolladora de software e instructora'
        />
        <Card
          urlImg='/img/29123800.jpg'
          nombre='Christian Velasco'
          profesion='Head de Alura e instructor'
        />
        <Card
          urlImg='/img/75937414.jpg'
          nombre='Jose Gonzalez'
          profesion='Dev. FullStack'
        />
        <Card
          urlImg='/img/92184087.jpg'
          nombre='Jeanmarie Quijada'
          profesion='Instructora en Alura Latam'
        />
      </div>
    </>
  );
};

export default App;
