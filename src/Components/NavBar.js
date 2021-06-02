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
  transition: all 0.4s ease-in-out;
`

const NavBar = () => {
  const [navColor, setNavColor] = useState(false)

  const changeBgColor = debounce(() => {
    if (window.scrollY >= 200) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }, 400)

  window.addEventListener('scroll', changeBgColor)

  return <Nav navColor={navColor}>navbar</Nav>
}

export default NavBar
