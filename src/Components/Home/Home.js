import React from 'react'
import HeroSection from './HeroSection'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Background = styled.div`
  position: relative;
  background: #130d0a;
  height: 2000px;
  width: 100%;
  margin-top: 70px;
  z-index: 2;
`

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
    >
      <HeroSection />
      <Background />
    </motion.div>
  )
}

export default Home
