import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <>
      <Container>
        <Logo>
          <LogoBox>
            Z
          </LogoBox>
          <LogoText>
            지그재그 앱에서 더 편리하게
          </LogoText>
        </Logo>
        
        <AppButton>
          앱으로 이동
        </AppButton>
      </Container>
    </>
  )
}

export default Header

const Container = styled.div`
  font-family: 'NanumSquareBold';
  display: flex;
  width: 1440px;
  height: 54px;
  margin: 0 auto;
  padding: 0 17px;
  align-items: center;
  justify-content: space-between;
  background-color: #F1ECEA;
`;
const Logo = styled.div`
  font-family: 'NanumSquareAceb';
  display: flex;
  text-align: center;
  justify-content: center;

`;
const LogoBox = styled.div`
  font-family: 'NanumSquareExtraBold';
  font-size: 20px;
  width: 25px;
  height: 25px;
  background-color: #FA6EE3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  border-radius: 4px;
`;
const LogoText = styled.div`
  font-family: 'NanumSquareBold';
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const AppButton = styled.button`
  font-family: 'NanumSquare';
  text-align: center;
  height: 30px;
  padding: 0 12px;
  background-color: #242729;
  border: none;
  border-radius: 100px;
  font-size: 12px;
  color: #FFFFFF;
`;

// font-family: 'NanumSquareLight';
// font-family: 'NanumSquare';
// font-family: 'NanumSquareBold';
// font-family: 'NanumSquareExtraBold';