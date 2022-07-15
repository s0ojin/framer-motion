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

const ExerciseBtn = styled.button`
  width: 200px;
  height: 70px;
  text-transform: uppercase;
  a{
    display: block;
    padding: 20px;
  }
`;

const CardAnimationBtn = styled(ExerciseBtn)`

`;

function Home() {
  return(
    <Box>
      <h1>welcome animation world!</h1>
      <BtnWrapper>
        <ExerciseBtn>
          <Link to="/exercise">
            exersice
          </Link>
        </ExerciseBtn>
        <CardAnimationBtn>
          <Link to="/card">
            card animation
          </Link>
        </CardAnimationBtn>
      </BtnWrapper>
    </Box>
  )
}

export default Home;