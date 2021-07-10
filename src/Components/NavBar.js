import React, { useState } from 'react'
import { debounce } from 'lodash'
import styled from 'styled-components'
import { Link as PageLink } from 'react-router-dom'

const Nav = styled.div`
  height: 80px;
  width: 100%;
  background: ${({ navColor }) => (navColor ? '#130d0a' : 'transparent')};
  position: fixed;
  top: ${({ navColor }) => (navColor ? '-5px' : '0')};
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
`
const NavContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 60% 10%;
`

const Title = styled.div`
  color: #fff;
  text-shadow: 0 0 5px #ffdc00, 0 0 10px #ffdc00, 0 0 20px #ffdc00,
    0 0 40px #ffdc00;
  font-family: league;
  font-weight: 800;
  font-size: 30px;
  outline: none;
  padding: 31px 0 0 90px;
  transition: opacity 0.3s ease-in-out;
  -webkit-transform: translate3d(0, 0, 0);
`

const StyledPageLink = styled(PageLink)`
  text-align: center;
  padding-top: 25px;
  background: white;
  cursor: pointer;
`

const NavBar = () => {
  const [navColor, setNavColor] = useState(false)

  const changeBgColor = debounce(() => {
    if (window.scrollY >= 700) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }, 200)

  window.addEventListener('scroll', changeBgColor)

  return (
    <Nav navColor={navColor}>
      <NavContent>
        <Title style={{ opacity: `${navColor ? 1 : 0}` }}>
          CHALLENGER BOIS
        </Title>
        <div></div>
        <StyledPageLink to='/test'>LINK</StyledPageLink>
      </NavContent>
    </Nav>
  )
}

export default NavBar
