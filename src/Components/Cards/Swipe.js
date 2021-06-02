import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

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
        navigation={true}
        loop={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <CardFront info={props.info} />
        </SwiperSlide>
        <SwiperSlide>
          <CardBack info={props.info} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Swipe
