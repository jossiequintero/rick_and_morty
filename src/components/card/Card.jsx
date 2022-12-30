import './card.css';

import React from 'react'

export default function Card(props) {
  let {name, species, gender, image, onClose} = props;
  return (
    <div className='card'>
      <button onClick={onClose}>X</button>
      <img className='image'src={image} alt={`Imagen de ${name}`}/>
      <div className='name'>
      <span>{name}</span>
      </div>
      <div>
        <span className='gender'>{gender}</span>
        <span className='species'>{species}</span>
      </div>
    </div>
  )
}
