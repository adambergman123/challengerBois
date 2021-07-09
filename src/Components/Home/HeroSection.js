import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './HeroSection.css'
import { Link as ScrollLink } from 'react-scroll'
import { Link as PageLink } from 'react-router-dom'
import TitleSvg from '../../Elements/TitleSvg/TitleSvg'
import FancyButton from '../../Elements/FancyButton/FancyButton'

const SpecialDiv = styled.div`
  width: 100vw;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const StyledLink = styled(ScrollLink)`
  position: fixed;
  margin-top: 42vh;
  margin-left: calc(16vw + 231px);

  @media screen and (max-width: 1300px) {
    margin-left: 0;
    margin-top: 35vh;
  }
  z-index: 1;
`

const StyledPageLink = styled(PageLink)`
  position: absolute;
  margin-top: 5vh;
  z-index: 10;
  padding: 50px;
  background: white;
  cursor: pointer;
`

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

  @media screen and (max-width: 1300px) {
    margin-left: 0;
  }
  @media screen and (max-width: 925px) {
    margin: 0;
  }
`

const Parallax = styled.div`
  width: 100%;
  height: 100%;
`

const HeroMobile = styled.div``

const Layer = styled.div`
  background-repeat: no-repeat;
  width: 100%;
  height: 880px;
  position: fixed;
  z-index: -1;
`

const TitleLayer = styled.div`
  background-repeat: no-repeat;
  width: 100%;
  height: 880px;
  position: fixed;
  z-index: -1;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const SpecialFrontLayer = styled.div`
  background-repeat: no-repeat;
  width: 100%;
  height: 880px;
  position: fixed;
  z-index: 1;
  pointer-events: none;
  margin-top: 0px;
`

const Background = styled.div`
  position: relative;
  background: #130d0a;
  height: 2000px;
  width: 100%;
  margin-top: -5px;
  z-index: 2;
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
    <div>
      <StyledPageLink to='/test'>LINK</StyledPageLink>
      <SpecialDiv id='parallax'>
        <StyledLink
          to='dummy'
          spy={true}
          smooth={true}
          duration={1000}
          style={{
            cursor: 'pointer',
            transform: `translateY(-${offsetY * 0.25}px)`,
          }}
        >
          <FancyButton text='Explore' type='fromRight' />
        </StyledLink>
        <SpecialFrontLayer
          className='layer5'
          style={{
            transform: `translateY(-${offsetY * 1.0}px)`,
          }}
        ></SpecialFrontLayer>
      </SpecialDiv>
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
          <TitleLayer
            style={{
              transform: `translateY(-${offsetY * 0.25}px)`,
            }}
          >
            <TitleWrapper>
              <TitleSvg />
            </TitleWrapper>
          </TitleLayer>
        </Parallax>
        <HeroMobile id='heroMobile'>
          <TitleSvg />
        </HeroMobile>
      </Hero>

      <Background />
      <div id='dummy'>dummydum</div>
    </div>
  )
}

export default HeroSection
