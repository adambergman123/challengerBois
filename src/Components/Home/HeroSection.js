import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import './HeroSection.css'
import TitleSvg from '../../Elements/TitleSvg/TitleSvg'

const Hero = styled.div`
  height: 880px;
  overflow: hidden;
  position: relative;
  margin-top: -80px;

  @media screen and (max-width: 925px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 320px;
  }
`

const TitleWrapper = styled.div`
  position: fixed;
  margin-top: 24vh;
  margin-left: 16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s ease-in-out;

  @media screen and (max-width: 925px) {
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  padding: 30px;
`

const Parallax = styled.div`
  z-index: 0;
`

const HeroMobile = styled.div``

const Layer = styled.div`
  background-repeat: no-repeat;
  width: 100%;
  height: 880px;
  position: fixed;
  z-index: -1;
`

const Background = styled.div`
  background: #130d0a;
  height: 2000px;
  width: 100%;
  margin-top: -5px;
  z-index: 1;
`

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Hero id='hero'>
        <Parallax id='parallax'>
          <Layer
            className='layer-bg'
            style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
          ></Layer>
          <Layer
            className='layer1'
            style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
          ></Layer>
          <Layer
            className='layer2'
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          ></Layer>
          <Layer
            className='layer3'
            style={{ transform: `translateY(-${offsetY * 0.8}px)` }}
          ></Layer>
          <Layer
            className='layer4'
            style={{ transform: `translateY(-${offsetY * 0.85}px)` }}
          ></Layer>
          <Layer
            style={{ transform: `translateY(-${offsetY * 0.2}px)`, zIndex: 0 }}
          >
            <TitleWrapper>
              <TitleSvg />
              <StyledLink to='dummy' spy={true} smooth={true} duration={1000}>
                Explore
              </StyledLink>
            </TitleWrapper>
          </Layer>
          <Layer
            className='layer5'
            style={{
              transform: `translateY(-${offsetY * 1.0}px)`,
              zIndex: 0,
            }}
          ></Layer>
        </Parallax>
        <HeroMobile id='heroMobile' />
      </Hero>
      <Background />
      <div id='dummy'>dummydum</div>
    </>
  )
}

export default HeroSection
