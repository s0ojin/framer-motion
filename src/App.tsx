import styled from "styled-components";
import { motion } from "framer-motion";


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const BasicBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const VariantsBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr );
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 35px;
  place-self: center;
`;

const basic = {
  start: {scale:0},
  end: {scale:1, rotateZ:360, transition: {delay:0.5, type:"spring"}}
}

const variantsBox = {
  start: {opacity:0, scale:0.5},
  end: {opacity:1, scale:1, transition: {type:"spring", duration: 0.5, bounce:0.5, delayChildren:0.5, staggerChildren:0.2}}
}

const variantsCircle = {
  start: {opacity:0, y: 10},
  end: {opacity:1, y: 0}
}

function App() {
  return (
    <Wrapper>
      <BasicBox variants={basic} initial="start" animate="end"/>
      <VariantsBox variants={variantsBox} initial="start" animate="end">
        <Circle variants={variantsCircle}/>
        <Circle variants={variantsCircle}/>
        <Circle variants={variantsCircle}/>
        <Circle variants={variantsCircle}/>
      </VariantsBox>
    </Wrapper>
  )
}

export default App;
