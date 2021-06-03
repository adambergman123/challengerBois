import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import './HeroSection.css'

const Hero = styled.div`
  height: 880px;
  overflow: hidden;
  position: relative;
  margin-top: -80px;
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
`

const Title = styled.div`
  color: #130d0a;
  font-family: league;
  font-weight: 800;
  font-size: 72px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  line-height: 0.7em;
  outline: none;
  animation: animate 2.5s ease-in-out;
  animation-fill-mode: forwards;
  transition: opacity 0.6s ease-in-out;
`

const StyledLink = styled(Link)``

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
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  //Tillfällig lösning: Låser scrollen i början så det laggar mindre.
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden'
  //   setTimeout(() => {
  //     document.body.style.overflowY = 'scroll'
  //   }, 2500)
  // }, [])

  const [titleOpacity, setTitleOpacity] = useState(1)

  const changeOpacity = () => {
    if (window.scrollY >= 500) {
      setTitleOpacity(0)
    } else {
      setTitleOpacity(1)
    }
  }

  window.addEventListener('scroll', changeOpacity)

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
          <Link
            to='dummy'
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => console.log('clicked')}
          >
            Explore
          </Link>
        </TitleWrapper>

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
      </Hero>
      <Background />
      <div id='dummy'>dummydum</div>
    </>
  )
}

export default HeroSection
