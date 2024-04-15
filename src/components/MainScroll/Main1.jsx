import React from 'react'
import '../../index.css'
import styled, { keyframes } from 'styled-components';
import mainAppImage from '../../assets/images/main1AppImage.png'
import Arrow from './Arrow'

function Main1() {
  return (
    <Container>
      <TxtBtnBox>
        <Text>
          내일 뭐 입지?<br/>
          고민말고 지그재그!  
        </Text>

        <Button>
          <a href='https://partners.kakaostyle.com/entry_requests/guide'>
            <BlackButton >
              입점하기
            </BlackButton>
          </a>
          
          <a href = 'https://drive.google.com/file/d/10B_knAcHnAZ4QmI9PDJvcMi2x7oM2lWB/view'>
            <WhiteButton>
              서비스 소개서
            </WhiteButton> 
          </a>

        </Button>
      </TxtBtnBox>
      <ImageBox>
        <img src={mainAppImage} alt='MainAppImage' />
      </ImageBox>
      <Arrow />
    </Container>
  )
}

export default Main1

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 0 auto;
  background-color: var(--zWhite);
  height: 100vh;
  position: relative;
  width: 100%;
`;
const TxtBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;
const Text = styled.div`
  text-align: start;
  display: flex;
  font-family: var(--fontExtraBold);
  font-size: 50px;
  line-height: 130%;
  white-space: nowrap;
  justify-content: center;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;
const BlackButton = styled.button`
  color: var(--zWhite);
  background-color: var(--zBlack);
  font-family: var(--fontBold);
  font-size: 17px;
  border: none;
  border-radius: 100px;
  margin: 0 10px;
  padding: 16px;
  width: 140px;
  src: 'https://partners.kakaostyle.com/entry_requests/guide';
`;
const WhiteButton = styled.button`
  color: var(--zBlack);
  background-color: var(--zWhite);
  border-color: var(--zBlack);
  font-family: var(--fontExtraBold);
  font-size: 17px;
  border-radius: 100px;
  margin: 0 10px;
  padding: 16px;
  width: 140px;
`;
const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    height: 100%;
    width: 100%;
  }
`;
// const ArrowBlink = keyframes`
//   0% {
//     margin-top: 70%;
//   }
//   100% {
//     margin-top: 75%;
//   }
//   `;
// const Arrow = styled.div`
//   position: absolute;
//   z-index: 30;
//   font-size: 100px;
//   /* bottom: 0; */
//   left: 50%;
//   transform: translate3d(-50%, -50%, 0);
//   animation: ${ArrowBlink} 1s alternate infinite;
// `;