import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const MainWrapper = styled(motion.div)`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  width: 88vw;
  max-width: 1400px;
`

const Divider = styled.hr`
  border-top: 8px solid rgb(33, 36, 48);
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`

const HighlightsTitle = styled.div`
  background-image: linear-gradient(
    270deg,
    rgb(229, 93, 135) -0.52%,
    rgb(95, 195, 228) 100%
  );
`
const HighlightsTitleGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 1050px) {
    grid-template-columns: 100%;
  }
`
const HighlightsText = styled.div`
  margin-left: 20px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  width: 80%;
`

const TopText = styled.div`
  font-size: 32px;
  font-family: Wotfard-Semibold;
  color: rgb(231, 231, 233);
`

const BottomText = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 18px;
  font-family: Wotfard;
  color: rgb(231, 231, 233);
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
        <Divider className='rounded' />
        <HighlightsTitle className='rounded-lg shadow-lg'>
          <HighlightsTitleGrid>
            <HighlightsText>
              <TopText>Welcome to CodeSnap!</TopText>
              <BottomText>
                Hey! My name's Sam, and I'm making video courses which teach you
                to make cool stuff for the web, mobile, and beyond.
              </BottomText>
            </HighlightsText>
          </HighlightsTitleGrid>
        </HighlightsTitle>
      </ContentWrapper>
    </MainWrapper>
  )
}

export default Highlights
