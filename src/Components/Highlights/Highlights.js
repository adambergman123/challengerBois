import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const MainWrapper = styled(motion.div)`
  width: 100vw;
  background: lightblue;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  width: 88vw;
  max-width: 1500px;
`

const Divider = styled.div`
  height: 10px;
  width: 100%;
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
`

const HighlightsTitle = styled.div`
  height: 214px;

  background: pink;
`

const Highlights = () => {
  return (
    <MainWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <ContentWrapper>
        <Divider />
        <HighlightsTitle>Highlights</HighlightsTitle>
      </ContentWrapper>
    </MainWrapper>
  )
}

export default Highlights
