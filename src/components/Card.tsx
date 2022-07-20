import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";


const Wrapper= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  font-size: 28px;
  background-color: white;
  border-radius: 20px;
`;

const BoxVariants = {
  initial: (isBack:boolean) => ({
    x: isBack ? -500 : 500,
    scale: 0,
    opacity:0
  }),
  visible: {
    x:1,
    scale: 1,
    opacity:1,
    transition : {
      duration: 1
    }
  },
  exit: (isBack:boolean) => ({
    x: isBack ? 500 : -500,
    scale: 0,
    opacity:0,
    transition: {
      duration: 1
    }
  })
}

function Card() {
  const [show, setShow] = useState(1);
  const [back, setBack] = useState(false);
  const nextSlide = () => {
    setBack(false)
    setShow( prev => prev === 10 ? 10 : prev + 1 )
  }
  const prevSlide = () => {
    setBack(true)
    setShow( prev => prev === 1 ? 1 : prev - 1 )
  }
  return(
    <Wrapper>
      <AnimatePresence custom={back}>
            <Box
              custom={back}
              key={show}
              variants={BoxVariants}
              initial="initial"
              animate="visible"
              exit="exit"              
            >
              {show}
            </Box>
      </AnimatePresence>
      <button onClick={nextSlide}>next</button>
      <button onClick={prevSlide}>prev</button>
    </Wrapper>
  )
}

export default Card;