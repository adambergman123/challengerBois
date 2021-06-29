import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import './HeroSection.css'

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
  opacity: ${({ titleOpacity }) => titleOpacity};
  transition: opacity 0.6s ease-in-out;

  @media screen and (max-width: 925px) {
    margin: 0;
  }
`

const Title = styled.div`
  color: #130d0a;
  font-family: league;
  font-weight: 800;
  font-size: 4rem;
  //-webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  line-height: 0.7em;
  outline: none;
  animation: animate 2.5s ease-in-out;
  animation-fill-mode: forwards;
  transition: opacity 0.6s ease-in-out;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);

  @media screen and (max-width: 925px) {
    font-size: 2rem;
  }
`

const StyledLink = styled(Link)`
  padding: 30px;
`

const Parallax = styled.div``

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
`

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0)
  const [titleOpacity, setTitleOpacity] = useState(1)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)

    if (window.scrollY >= 500) {
      setTitleOpacity(0)
    } else {
      setTitleOpacity(1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  //Tillfällig lösning: Låser scrollen i början så det laggar mindre.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      document.body.style.overflowY = 'scroll'
    }, 2500)
  }, [])

  return (
    <>
      <Hero id='hero'>
        <TitleWrapper
          titleOpacity={titleOpacity}
          style={{
            transform: `translateY(-${offsetY * 0.2}px)`,
          }}
        >
          <Title>CHALLENGER BOIS</Title>
          <StyledLink
            to='dummy'
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => console.log('clicked')}
          >
            Explore
          </StyledLink>
        </TitleWrapper>

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
            className='layer5'
            style={{ transform: `translateY(-${offsetY * 1.0}px)` }}
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
