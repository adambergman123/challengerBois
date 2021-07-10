import React from 'react'
import Cards from '../Cards/Cards'
import HeroSection from './HeroSection'
import { motion } from 'framer-motion'
import { transition } from '../../GlobalStyles'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
    >
      <HeroSection />
      <div>
        <Cards />
      </div>
    </motion.div>
  )
}

export default Home
