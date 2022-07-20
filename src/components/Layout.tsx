import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
`;

const Box = styled(motion.div)`
  width: 350px;
  height: 350px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: skyblue;
`;

function Layout() {
  const [clicked, setClicked] = useState(false);
  const clickToggle = () => {
    setClicked(prev => !prev)
  }
  return(
    <Wrapper onClick={clickToggle}>
      <Box>
        {!clicked ? <Circle layoutId="circle" style={{borderRadius:"50px"}}/> : null}
      </Box>
      <Box>
        {clicked ? <Circle layoutId="circle" style={{borderRadius:"20px", scale: 1.5}}/> : null}
      </Box>
    </Wrapper>
  )
}

export default Layout;