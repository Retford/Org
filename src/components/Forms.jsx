import React from 'react';
import '../css/forms.css';

const Forms = () => {
  return (
    <div className='container__form'>
      <h2 className='titulo__forms'>
        Rellena el formulario para crear el colaborador
      </h2>
      <form action='#' className='form'>
        <div className='item__form'>
          <label htmlFor='nombre' className='label__form'>
            Nombre
          </label>
          <input
            type='text'
            name='nombre'
            id='nombre'
            placeholder='Ingresar nombre'
            className='input__form'
          />
        </div>
        <div className='item__form'>
          <label htmlFor='puesto' className='label__form'>
            Puesto
          </label>
          <input
            type='text'
            name='puesto'
            id='puesto'
            placeholder='Ingresar puesto'
            className='input__form'
          />
        </div>
        <div className='item__form'>
          <label htmlFor='foto' className='label__form'>
            Foto
          </label>
          <input
            type='text'
            name='foto'
            id='foto'
            placeholder='Ingresar nombre'
            className='input__form'
          />
        </div>
        <div className='item__form'>
          <label htmlFor='equipo' className='label__form'>
            Equipo
          </label>
          <select name='equipo' id='equipo' className='input__form'>
            <option value='developer'>Developer</option>
            <option value='frontend'>Front End</option>
          </select>
        </div>
        <button type='submit' className='btn__forms'>
          Crear
        </button>
      </form>
    </div>
  );
};

export default Forms;
