import React from 'react'

const CardFront = (props) => {
  return (
    <div>
      <img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='' />
      <div
        style={{
          backgroundColor: 'black',
          height: '90px',
          color: 'white',
          borderRadius: '0 0 10px 10px',
        }}
      >
        {props.info.frontSideText}
      </div>
    </div>
  )
}

export default CardFront
