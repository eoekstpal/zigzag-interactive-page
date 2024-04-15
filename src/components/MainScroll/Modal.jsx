import React from 'react'
import zigzagAppQR from '../../assets/images/zigzagAppQR.png';
import styled from 'styled-components';
import '../../index.css'

function Modal({ handleModalClose }) {
  return (
    <Container>
      <QrImage>
        <img src={zigzagAppQR} alt='ZigZag App QR CODE' />
      </QrImage>
      <TextButtonBox>
        <Text>
          <h1>
            지그재그 앱에서 더 많은<br/>
            혜택을 받아보세요!
          </h1>
          <p>
            스마트폰으로 카메라 앱을 켜서<br/>
            QR코드를 포커스해보세요.
          </p>          
        </Text>
        <Button onClick={handleModalClose} >
          확인
        </Button>
      </TextButtonBox>
  </Container>
  )
}

export default Modal

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
  align-items: center;
`;
const QrImage = styled.div`
  margin: 0 auto;
  img {
    width: 150px;
    box-shadow: 0 0 5px gray;
    border-radius: 10px;
  }
`;
const TextButtonBox = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const Text = styled.div`
  line-height: 150%;
  h1 {
    font-family: var(--fontExtraBold);
    font-size: 20px;
    line-height: 140%;
    padding-bottom: 10px;
  }
  p {
    font-family: var(--fontBasic);
    color: var(--zGray);
    font-size: 15px;
    line-height: 130%;
  }
`;
const Button = styled.button`
  background-color: var(--zBlack);
  color: var(--zWhite);
  margin-top: 15px;
  width: 263px;
  height: 50px;
  border-radius: 30px;
  align-items: center;
`;