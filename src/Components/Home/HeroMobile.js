import React from 'react'
import TitleSvg from '../../Elements/TitleSvg/TitleSvg'
import styled from 'styled-components'
import './HeroSection.css'

const HeroMobileWrapper = styled.div``

const HeroMobile = () => {
  return (
    <HeroMobileWrapper id='heroMobile'>
      <TitleSvg />
    </HeroMobileWrapper>
  )
}

export default HeroMobile
