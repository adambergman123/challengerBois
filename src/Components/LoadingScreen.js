import React from 'react'
import styled from 'styled-components'
import OrbitLoader from '../Elements/OrbitLoader/OrbitLoader'

const LoadingScreenWrapper = styled.div`
  z-index: ${({ $loading }) => ($loading ? 1000 : -1)};
  position: fixed;
  width: 100vw;
  height: 105vh;
  background: #0b0b0b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: ${({ $loading }) => ($loading ? 1 : 0)};
  transition: all 1s ease-in-out;
  margin-top: -80px;
`

const LoadingScreen = ({ $loading }) => {
  return (
    <LoadingScreenWrapper $loading={$loading}>
      <OrbitLoader />
      <div
        className='animate-bounce uppercase'
        style={{ fontFamily: 'league', color: '#FFF1E8' }}
      >
        Gathering information from Summoners Rift...
      </div>
    </LoadingScreenWrapper>
  )
}

export default LoadingScreen
