import React from 'react'
import '../index.css'
import styled from 'styled-components';
import mainAppImage from '../assets/images/main1AppImage.png'

function Main1() {
  return (
    <Container>
      <TxtBtnBox>
        <Text>
          내일 뭐 입지? 
          <br/>고민말고 지그재그!  
        </Text>

        <Button>
          <BlackButton>
            입점하기
          </BlackButton>
          <WhiteButton>
            매체 소개서
          </WhiteButton>
        </Button>
      </TxtBtnBox>
      <ImageBox>
        <img classname='main1img' src={mainAppImage} alt='MainAppImage' />
      </ImageBox>
    </Container>
  )
}

export default Main1

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 680px;
  margin: 0 auto;
`;
const TxtBtnBox = styled.div`
  display: grid;
  margin: 0 auto;
  padding-left: 50px;
`;
const Text = styled.div`
  text-align: start;
  display: flex;
  font-family: var(--fontExtraBold);
  font-size: 50px;
  line-height: 130%;
  white-space: nowrap; 
  align-items: end;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 40px;
  font-size: var(--zP);

`;
const BlackButton = styled.button`
  color: var(--zWhite);
  background-color: var(--zBlack);
  font-size: 17px;
  font-family: var(--fontExtraBold);
  border: none;
  border-radius: 100px;
  margin: 0 10px;
  padding: 16px;
  width: 128px;
`;
const WhiteButton = styled.button`
  color: var(--zBlack);
  background-color: var(--zWhite);
  border-color: var(--zBlack);
  font-size: 17px;
  font-family: var(--fontExtraBold);
  border-radius: 100px;
  margin: 0 10px;
  padding: 16px;
  width: 128px;
`;
const ImageBox = styled.div`
  img {
    height: 680px;
    object-fit: cover;
  }
`;