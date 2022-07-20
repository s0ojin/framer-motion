import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  h1{  
    font-family: sans-serif;
    font-size: 100px;
    }
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const Btn = styled.button`
  width: 200px;
  height: 70px;
  text-transform: uppercase;
  a{
    display: block;
    padding: 20px;
  }
`;


function Home() {
  return(
    <Box>
      <h1>welcome animation world!</h1>
      <BtnWrapper>
        <Btn>
          <Link to="/exercise">
            exersice
          </Link>
        </Btn>
        <Btn>
          <Link to="/card">
            card animation
          </Link>
        </Btn>
        <Btn>
          <Link to="/layout">
            layout animation
          </Link>
        </Btn>
        <Btn>
          <Link to="/final">
            final project
          </Link>
        </Btn>
      </BtnWrapper>
    </Box>
  )
}

export default Home;