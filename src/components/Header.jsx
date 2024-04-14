import React from 'react'
import '../index.css'
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
  padding: 0 17px;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  background-color: var(--headerBeige);
`;
const Logo = styled.div`
  font-family: 'NanumSquareAceb';
  display: flex;
  text-align: center;
  justify-content: center;
  color: var(--zBlack);
`;
const LogoBox = styled.div`
  font-family: 'NanumSquareExtraBold';
  font-size: 20px;
  width: 25px;
  height: 25px;
  background-color: var(--zPink);
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
  background-color: var(--zButton);
  border: none;
  border-radius: 100px;
  font-size: 12px;
  color: var(--zWhite);
`;