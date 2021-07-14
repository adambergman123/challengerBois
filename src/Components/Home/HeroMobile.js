import React from 'react'
import TitleSvg from '../../Elements/TitleSvg/TitleSvg'
import styled from 'styled-components'
import './HeroSection.css'
import FancyButton from '../../Elements/FancyButton/FancyButton'

const HeroMobileWrapper = styled.div``

const HeroMobile = () => {
  return (
    <HeroMobileWrapper id='heroMobile'>
      <TitleSvg />
      <FancyButton text='Explore' type='fromRight' small />
    </HeroMobileWrapper>
  )
}

export default HeroMobile
