import React, { useState } from 'react'
import { debounce } from 'lodash'
import styled from 'styled-components'
import { Link as PageLink } from 'react-router-dom'
import TestIcon from '../Icons/TestIcon'
import FilmIcon from '../Icons/FilmIcon'
import HamburgerIcon from '../Icons/HamburgerIcon'
import InformationIcon from '../Icons/InformationIcon'

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
  grid-template-columns: 30% 41% 9% 9% 9% 2%;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 30% 26% 14% 14% 14% 2%;
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`

const Title = styled.div`
  color: #fff;
  text-shadow: 0 0 5px #ffdc00, 0 0 20px #ffdc00;
  font-family: Wotfard-SemiBold;
  font-size: 30px;
  outline: none;
  padding: 21px 0 0 90px;
  transition: opacity 0.3s ease-in-out;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  @media screen and (max-width: 1250px) {
    font-size: 24px;
    padding-left: 45px;
  }
`

const StyledPageLink = styled(PageLink)`
  margin-top: 20px;
  cursor: pointer;

  @media screen and (max-width: 925px) {
    margin-top: 8px;
    font-size: 0.8rem;
  }
`

const HamburgerIconWrapper = styled.div`
  display: none;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    display: block;
  }
`

const Dropdown = styled.div`
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.6, 0.01, -0.05, 0.9);
  position: absolute;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: ${({ showDropdown }) =>
    showDropdown ? `translateY(${0})` : `translateY(${-110}vh)`};
`

const NavBar = () => {
  const [navColor, setNavColor] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const changeBgColor = debounce(() => {
    if (window.scrollY >= 700) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }, 200)

  window.addEventListener('scroll', changeBgColor)

  return (
    <>
      <Nav navColor={navColor}>
        <NavContent>
          <Title style={{ opacity: `${navColor ? 1 : 0}` }}>
            CHALLENGER BOIS
          </Title>
          <div></div>
          <StyledPageLink to='/highlights' className='text-gray-100'>
            <div className='flex justify-center hover:bg-yellow-700 hover:bg-opacity-50 transition rounded p-2'>
              <FilmIcon />
              <div className='ml-1'>Highlights</div>
            </div>
          </StyledPageLink>
          <StyledPageLink to='/test' className='text-gray-100'>
            <div className='flex justify-center hover:bg-yellow-700 hover:bg-opacity-50 transition rounded p-2'>
              <TestIcon />
              <div className='ml-1'>Testing</div>
            </div>
          </StyledPageLink>
          <StyledPageLink to='/about' className='text-gray-100'>
            <div className='flex justify-center hover:bg-yellow-700 hover:bg-opacity-50 transition rounded p-2'>
              <InformationIcon />
              <div className='ml-1'>About</div>
            </div>
          </StyledPageLink>
        </NavContent>
      </Nav>
      <HamburgerIconWrapper onClick={() => setShowDropdown(!showDropdown)}>
        <HamburgerIcon />
      </HamburgerIconWrapper>
      <Dropdown
        showDropdown={showDropdown}
        onClick={() => setShowDropdown(false)}
        className='font-'
      >
        <StyledPageLink to='/' className='text-gray-100'>
          <div className='flex justify-center hover:bg-yellow-700 hover:bg-opacity-50 transition rounded p-2'>
            <div className='ml-1'>Home</div>
          </div>
        </StyledPageLink>
        <StyledPageLink to='/highlights' className='text-gray-100'>
          <div className='flex justify-center hover:bg-yellow-700 hover:bg-opacity-50 transition rounded p-2'>
            <FilmIcon />
            <div className='ml-1'>Highlights</div>
          </div>
        </StyledPageLink>
        <StyledPageLink to='/test' className='text-gray-100'>
          <div className='flex justify-center hover:bg-yellow-700 hover:bg-opacity-50 transition rounded p-2'>
            <TestIcon />
            <div className='ml-1'>Testing</div>
          </div>
        </StyledPageLink>
        <StyledPageLink to='/about' className='text-gray-100'>
          <div className='flex justify-center hover:bg-yellow-700 hover:bg-opacity-50 transition rounded p-2'>
            <InformationIcon />
            <div className='ml-1'>About</div>
          </div>
        </StyledPageLink>
      </Dropdown>
    </>
  )
}

export default NavBar
