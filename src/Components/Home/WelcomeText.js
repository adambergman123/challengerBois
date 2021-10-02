import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import './WelcomeText.css'
import { CgArrowLongDownC } from 'react-icons/cg'

const WelcomeWrapper = styled.div`
  position: relative;
  color: white;
  background: #130d0a;
  width: 100vw;
  z-index: 100;
  height: 1050px;
  font-family: 'Playfair Display', serif;
`

const WelcomeWrapperContent = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
`

const TitleWrapper = styled.div`
  padding-top: 350px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title1 = styled(motion.div)`
  font-family: Wotfard-Bold-Italic;
  font-size: 4rem;
  margin-right: 22vw;
  transform: translate3d(0, 0, 0);

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`
const Title2 = styled(motion.div)`
  font-family: Wotfard-Bold-Italic;
  font-size: 4rem;
  margin-left: 22vw;
  transform: translate3d(0, 0, 0);

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`

const WelcomeContent = styled.div`
  padding-top: 80px;
  height: 500px;
  display: grid;
  grid-template-columns: 12% 38% 48% 2%;
`

const SubHeader = styled.div`
  padding-top: 80px;
  grid-column: 2;
  font-size: 24px;

  @media screen and (max-width: 1200px) {
    padding-top: 20px;
  }
`
const ScrollDown = styled.div`
  padding-top: 24px;
  font-family: Wotfard-SemiBold;
  display: flex;
  align-items: center;
`

const WelcomeText = () => {
  const [titleRef, inView] = useInView({ threshold: 0.4 })
  const title1Animation = useAnimation()
  const title2Animation = useAnimation()

  useEffect(() => {
    if (inView) {
      title1Animation.start({
        x: 0,
        transition: { ease: 'easeInOut', duration: 2 },
      })
      title2Animation.start({
        x: 0,
        transition: { ease: 'easeInOut', duration: 2, delay: 1.3 },
      })
    }
    if (!inView) {
      title1Animation.start({
        x: '-75vw',
      })
      title2Animation.start({
        x: '75vw',
      })
    }
  }, [inView, title1Animation, title2Animation])

  return (
    <WelcomeWrapper>
      <WelcomeWrapperContent className='welcomeWrapper'></WelcomeWrapperContent>
      <TitleWrapper ref={titleRef} id='dummy'>
        <Title1 animate={title1Animation}>Boys Who Challenge...</Title1>
        <Title2 animate={title2Animation}>...The Unknown</Title2>
      </TitleWrapper>
      <WelcomeContent>
        <SubHeader>
          Hej och välkommen till hemsidan för Challenger boisen. Vi består av
          ett antal pojkar vars gemensamma mål är att nå challenger. Det går
          bättre för vissa än andra.
          <ScrollDown className='text-pink-600'>
            Scrolla ner för att läsa mer om boisen.
            <CgArrowLongDownC size='50px' className='animate-bounce' />
          </ScrollDown>
        </SubHeader>
        <div className='challengerImage' />
      </WelcomeContent>
    </WelcomeWrapper>
  )
}

export default WelcomeText
