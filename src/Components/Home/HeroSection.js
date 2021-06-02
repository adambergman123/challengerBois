import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './HeroSection.css'

const Hero = styled.div`
  height: 880px;
  overflow: hidden;
  position: relative;
  margin-top: -80px;
`

const Title = styled.div`
  color: #130d0a;
  position: fixed;
  margin-top: 240px;
  margin-left: 240px;
  font-family: league;
  font-weight: 800;
  font-size: 72px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  line-height: 0.7em;
  outline: none;
  animation: animate 5.5s linear;
  animation-fill-mode: forwards;
`

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

  return (
    <>
      <Hero id='hero'>
        <Title style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>
          CHALLENGER BOIS
        </Title>
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
    </>
  )
}

export default HeroSection
