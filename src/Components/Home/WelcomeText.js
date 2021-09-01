import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const WelcomeWrapper = styled.div`
  position: relative;
  color: white;
  background: #130d0a;
  width: 100vw;
  z-index: 100;
  height: 1400px;
  font-family: 'Playfair Display', serif;

  background-image: url('../../images/Daco.png');
  background-repeat: no-repeat;
  background-size: 100%;
`
const TitleWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title1 = styled(motion.div)`
  font-family: leagueItalic;
  font-size: 4rem;
  margin-right: 22vw;
  transform: translate3d(0, 0, 0);
`
const Title2 = styled(motion.div)`
  font-family: leagueItalic;
  font-size: 4rem;
  margin-left: 22vw;
  transform: translate3d(0, 0, 0);
`

const WelcomeContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
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
      <TitleWrapper ref={titleRef}>
        <Title1 animate={title1Animation}>Boys Who Challenge...</Title1>
        <Title2 animate={title2Animation}>...The Unknown</Title2>
      </TitleWrapper>
      <WelcomeContent>
        <div>
          Hi and welcome to challenger bois. kanske quotes och bilder på boisen
          på olika champions. . Hi and welcome to challenger bois. kanske quotes
          och bilder på boisen på olika champions. .
        </div>
        <div>henke: imorgon är det fredag</div>
      </WelcomeContent>
    </WelcomeWrapper>
  )
}

export default WelcomeText
