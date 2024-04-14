import React from 'react'
import '../index.css'
import styled from 'styled-components';
import main2AppImage from '../assets/images/main2AppImage.png'

function Main2() {
  return (
    <Container>
      <TextBox>
        <HeadText>
          <p>
            지그재그
          </p>
          <h1>
            월 370만 명이 사용하는<br/>
            글로벌 스타일 커머스  
          </h1>
        </HeadText>
        <InnerText>
          지그재그는 일반적인 커머스 플랫폼을 넘어,<br/>
          보다 진화한 Ai 기반의 개인화 맞춤형 서비스로<br/>
          전 세계 사용자와 파트너를 연결합니다.
        </InnerText>
      </TextBox>
      <ImageBox>
        <img src={main2AppImage} alt='MainAppImage' />
      </ImageBox>
    </Container>
  )
}

export default Main2

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 680px;
  margin: 0 auto;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;
const HeadText = styled.div`
  text-align: start;
  font-family: var(--fontExtraBold);
  font-size: 45px;
  line-height: 130%;
  white-space: nowrap; 
  align-items: end;
  p{
    color: var(--zPink);
    font-size: 19px;
  }
`;
const InnerText = styled.div`
  text-align: start;
  display: flex;
  font-family: var(--fontBasic);
  font-size: 19px;
  line-height: 180%;
  white-space: nowrap; 
  align-items: start;
  padding-top: 20px;
`;
const ImageBox = styled.div`
  img {
    width: 570px;
    height: 680px;
  }
`;