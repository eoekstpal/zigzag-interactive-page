import React from 'react'
import { TfiReload } from "react-icons/tfi";
import { LiaCalendarCheckSolid } from "react-icons/lia";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import styled from 'styled-components';

function Section4() {
  return (
    <Container>
      <Title>
        <h2>더 알아보기</h2>
      </Title>
      
      <CardBox>
        <Box>
          <Icon>
            <TfiReload />
          </Icon>
          <HeaderText>쇼핑몰</HeaderText>
          <InnerText>
            여성의류 및 패션잡화<br/>
            상품을 사입 및 제작하여<br/>
            판매하는 스토어
          </InnerText>
          <a href='https://partnerlounge.kakaostyle.com/store'>
            <LinkButton>더 알아보기</LinkButton>
          </a>
        </Box>

        <Box>
          <Icon>
            <LiaCalendarCheckSolid />
          </Icon>
          <HeaderText>브랜드</HeaderText>
          <InnerText>
            자체 브랜드를 보유하고<br/>
            상품을 자체 제작하여<br/>
            판매하는 비중이 높은 스토어
          </InnerText>
          <a href='https://partnerlounge.kakaostyle.com/brand'>
            <LinkButton>더 알아보기</LinkButton>
          </a>
          
        </Box>

        <Box>
          <Icon>
            <HiOutlineComputerDesktop />
          </Icon>          
          <HeaderText>뷰티</HeaderText>
          <InnerText>
            뷰티 상품을 제작 및<br/>
            판매하는 스토어
          </InnerText>
          <a href='https://partnerlounge.kakaostyle.com/beauty'>
            <LinkButton>더 알아보기</LinkButton>
          </a>
        </Box>

        <Box>
          <Icon>
            <HiOutlineComputerDesktop />
          </Icon>          
          <HeaderText>라이프</HeaderText>
          <InnerText>
            라이프스타일 상품군을<br/>
            제작 및 판매하는 스토어
          </InnerText>
          <a href='https://partnerlounge.kakaostyle.com/life'>
            <LinkButton>더 알아보기</LinkButton>
          </a>
        </Box>
      </CardBox>
    </Container>
  )
}

export default Section4

const Container = styled.div`
  padding: 100px 0;
`;
const Title = styled.div`
  font-family: var(--fontExtraBold);
  font-size: 36px;
  text-align: center;
`;
const CardBox = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
`;
const Box = styled.div`
  padding: 30px 40px;
  text-align: center;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  padding: 30px 0;
  font-size: 70px;
`;
const HeaderText = styled.div`
    font-size: 36px;
    font-family: var(--fontExtraBold);
`;
const InnerText = styled.div`
  padding: 30px 0;
  color: var(--zGray);
  font-family: var(--fontBasic);
  line-height: 130%;
  font-size: 17px;
  height: 150px;
`;
const LinkButton = styled.button`
  background-color: var(--zLightGray);
  font-family: var(--fontBasic);
  font-size: 17px;
  border: none;
  border-radius: 100px;
  margin: 0 10px;
  padding: 16px;
  width: 140px;
`;