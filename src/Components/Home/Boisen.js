import React from 'react'
import styled from 'styled-components'
import './Boisen.css'

const Wrapper = styled.div`
  width: 100vw;
  height: 800px;
  color: white;
  background: #130d0a;
`

const Axel = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
`

const AxelImage = styled.div`
  width: 50%;
`

const Boisen = () => {
  return (
    <Wrapper>
      <Axel>
        <AxelImage className='axelImage' />
        <div className='glass'></div>
      </Axel>
    </Wrapper>
  )
}

export default Boisen
