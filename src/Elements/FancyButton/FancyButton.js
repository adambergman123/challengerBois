import React from 'react'
import './FancyButton.css'
import styled from 'styled-components'

const FancyButtons = styled.div`
  transform: ${({ small }) => small && 'scale(0.6) translateY(-110px)'};

  @media screen and (max-width: 800px) {
    transform: ${({ small }) => small && 'scale(0.6) translateY(-130px)'};
  }
  @media screen and (max-width: 500px) {
    transform: ${({ small }) => small && 'scale(0.5) translateY(-180px)'};
  }
`

const FancyButton = ({ text, type, small }) => {
  return (
    <FancyButtons small={small}>
      {type === 'fromTop' && (
        <div className='background'>
          <div className='btn from-top'>
            <span className='text'>{text}</span>
          </div>
        </div>
      )}
      {type === 'fromLeft' && (
        <div className='background'>
          <div className='btn from-left'>
            <span className='text'>{text}</span>
          </div>
        </div>
      )}
      {type === 'fromRight' && (
        <div className='background'>
          <div className='btn from-right'>
            <span className='text'>{text}</span>
          </div>
        </div>
      )}
      {type === 'fromCenter' && (
        <div className='background'>
          <div className='btn from-center'>
            <span className='text'>{text}</span>
          </div>
        </div>
      )}
      {type === 'fromBottom' && (
        <div className='background'>
          <div className='btn from-bottom'>
            <span className='text'>{text}</span>
          </div>
        </div>
      )}
    </FancyButtons>
  )
}

export default FancyButton
