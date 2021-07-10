import React from 'react'
import { Link as PageLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { transition } from '../GlobalStyles'

const Test = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <PageLink style={{ background: 'white', padding: '800px' }} to='/'>
        Home
      </PageLink>
    </motion.div>
  )
}

export default Test
