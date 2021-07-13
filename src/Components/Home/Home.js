import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './HeroSection'
import LoadingScreen from '../LoadingScreen'

const Home = () => {
  const [loading, SetLoading] = useState(
    document.readyState === 'complete' ? false : true
  )

  const loadingFinished = () => {
    SetLoading(false)
  }

  useEffect(() => {
    document.readyState !== 'complete' &&
      window.addEventListener('load', loadingFinished)
    return () => {
      window.removeEventListener('load', loadingFinished)
    }
  }, [])

  return (
    <>
      <LoadingScreen $loading={loading} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      >
        <HeroSection loading={loading} />
        <div id='dummy'>dummydum</div>
      </motion.div>
    </>
  )
}

export default Home
