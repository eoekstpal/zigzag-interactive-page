import React from 'react'
import styled from 'styled-components';
import phoneAppImage1 from '../../assets/images/phoneApp1.png'
// import phoneAppImage2 from '../assets/images/phoneApp2.png'
// import phoneAppImage3 from '../assets/images/phoneApp3.png'
// import phoneAppImage4 from '../assets/images/phoneApp4.png'

function Section3() {
  return (
    <Container>
      <Title>
        <h2>앱 주요 기능</h2>
      </Title>
      <GridBox>
        <InnerText>
          <h3>개인화 맞춤 상품 추천</h3>
          <p>
            사용자 행동 데이터 기반으로<br/>
            맞춤형 상품을 추천하는<br/>
            개인화 추천 기능
          </p>
        </InnerText>
        <ImageSlider>
          <img src={phoneAppImage1} alt='Phone App Screens' />
        </ImageSlider>
      </GridBox>
    </Container>
  )
}

export default Section3

const Container = styled.div`
  padding: 100px 0;
`;
const Title = styled.div`
  font-family: var(--fontExtraBold);
  font-size: 36px;
  text-align: center;
`;
const GridBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;
const InnerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: 0 auto; */
  padding: 0 70px;
  text-align: left;
  h3 {
    font-size: 32px;
    font-family: var(--fontExtraBold);
    text-align: left;
    padding: 20px 0;
  }
  p {
      font-size: 19px;
      font-family: var(--fontBasic);
      text-align: left;
      line-height: 140%;
  }
`;
const ImageSlider = styled.div`
  /* margin: 0 auto; */
  padding: 0 70px;
  img {
    height: 500px;
  }
`;