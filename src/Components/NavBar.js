import React, { useState } from 'react'
import { debounce } from 'lodash'
import styled from 'styled-components'

const Nav = styled.div`
  height: 80px;
  width: 100%;
  background: ${({ navColor }) => (navColor ? '#130d0a' : 'transparent')};
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: all 0.6s ease-in-out;
`

const Title = styled.div`
  color: #fff;
  text-shadow: 0 0 5px #ffdc00, 0 0 10px #ffdc00, 0 0 20px #ffdc00,
    0 0 40px #ffdc00, 0 0 80px #ffdc00;
  font-family: league;
  font-weight: 800;
  font-size: 30px;
  //-webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  //line-height: 0.7em;
  outline: none;
  padding: 26px 0 0 90px;
  transition: opacity 0.6s ease-in-out;
  -webkit-transform: translate3d(0, 0, 0);
`

const NavBar = () => {
  const [navColor, setNavColor] = useState(false)

  const changeBgColor = debounce(() => {
    if (window.scrollY >= 500) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }, 400)

  window.addEventListener('scroll', changeBgColor)

  return (
    <Nav navColor={navColor}>
      <Title style={{ opacity: `${navColor ? 1 : 0}` }}>CHALLENGER BOIS</Title>
    </Nav>
  )
}

export default NavBar
