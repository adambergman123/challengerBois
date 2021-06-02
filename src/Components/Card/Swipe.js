import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/effect-flip/effect-flip.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import './swipeStyles.css'

// import Swiper core and required modules
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper/core'

// install Swiper modules
SwiperCore.use([EffectFlip, Pagination, Navigation])

const Swipe = (props) => {
  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={false}
        loop={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='' />
          <div
            style={{
              backgroundColor: 'black',
              height: '90px',
              color: 'white',
              borderRadius: '0 0 10px 10px',
            }}
          >
            {props.info}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='' />
          <div
            style={{
              backgroundColor: 'black',
              height: '90px',
              color: 'white',
              borderRadius: '0 0 10px 10px',
            }}
          >
            Kung på kayn
            <br />
            Platinum
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Swipe
