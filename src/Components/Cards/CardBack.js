import React from 'react'

const CardBack = (props) => {
  return (
    <div>
      <img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='' />
      <div
        style={{
          backgroundColor: 'black',
          height: '90px',
          color: 'white',
          borderRadius: '0 0 10px 10px',
        }}
      >
        {props.info.backSideText}
      </div>
    </div>
  )
}

export default CardBack
