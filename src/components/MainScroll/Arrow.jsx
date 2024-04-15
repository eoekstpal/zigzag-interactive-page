import React from 'react'
import styled, { keyframes } from 'styled-components';
import { RiArrowDownSLine } from "react-icons/ri";

function Arrow() {
  return (
    <Container>
    <RiArrowDownSLine />
  </Container>
  )
}

export default Arrow

const ArrowBlink = keyframes`
  0% {
    margin-top: 70%;
  }
  100% {
    margin-top: 75%;
  }
  `;
const Container = styled.div`
  position: absolute;
  z-index: 30;
  font-size: 100px;
  /* bottom: 0; */
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  animation: ${ArrowBlink} 1s alternate infinite;
`;