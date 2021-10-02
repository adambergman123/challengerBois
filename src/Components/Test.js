import React from 'react'
import { Link as PageLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Cards from './Cards/Cards'
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
  background: black;
  width: 100vw;
  height: 2000px;
`

const Test = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <PageLink style={{ padding: '800px' }} to='/'>
        Home
      </PageLink>
      <div>
        <Cards />
      </div>
    </Wrapper>
  )
}

export default Test
