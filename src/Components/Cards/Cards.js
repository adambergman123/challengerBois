import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div>
      <Card
        id='card1'
        info={{ frontSideText: 'hello', backSideText: 'hola' }}
      />
      {/* <Card data={'hola'} /> */}
    </div>
  )
}

export default Cards
