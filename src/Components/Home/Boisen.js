import React from 'react'
import styled from 'styled-components'
import './Boisen.css'
import redLightningVideo from './redLightning.mp4'

const Wrapper = styled.div`
  width: 100vw;
  height: 800px;
  color: white;
`

const AllBois = styled.div`
  margin-top: 250px;

  display: flex;
  transform: scale(1.5);

  @media screen and (max-width: 1400px) {
    transform: scale(1.8);
  }
  @media screen and (max-width: 900px) {
    transform: scale(2.5);
  }
  @media screen and (max-width: 600px) {
    transform: scale(4);
  }
`

const BoisImage = styled.div`
  width: 3000px;
  aspect-ratio: 4.3 / 1;
  overflow-x: visible;
`

const VideoContainer = styled.div`
  position: absolute;
  z-index: -1;
`

const StyledVideo = styled.video`
  width: 100vw;
  z-index: -1;

  @media screen and (max-width: 1400px) {
    transform: scale(2);
  }
  @media screen and (max-width: 900px) {
    transform: scale(3);
  }
  @media screen and (max-width: 600px) {
    transform: scale(5);
  }
  @media screen and (max-width: 450px) {
    transform: scale(8);
  }
`

const LinearGradient = styled.div`
  width: 100vw;
  height: 400px;
  background: linear-gradient(to bottom, #130d0a, black);
`

const Fog = styled.div`
  position: absolute;
  width: 100%;
  height: 1200px;
`

const Boisen = () => {
  return (
    <>
      <Fog className='addFog'></Fog>
      <Wrapper>
        <LinearGradient />
        <VideoContainer>
          <StyledVideo muted loop autoPlay>
            <source src={redLightningVideo} type='video/mp4'></source>
          </StyledVideo>
        </VideoContainer>
        <AllBois>
          <BoisImage className='boisImage' />
        </AllBois>
      </Wrapper>
    </>
  )
}

export default Boisen
