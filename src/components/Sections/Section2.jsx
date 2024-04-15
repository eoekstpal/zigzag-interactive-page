import React, { useEffect } from 'react'
import { TfiReload } from "react-icons/tfi";
import { LiaCalendarCheckSolid } from "react-icons/lia";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Section2() {


  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  });

  return (
    <Container>
      <Title>
        <h2>
          수많은 플랫폼 중 왜 <span>지그재그</span>를 
          <span> 선택</span>해야 할까요?
        </h2>
      </Title>

        <CardBox 
         data-aos='fade-up'
         data-aos-duration='500'
         data-aos-anchor-placement='center-bottom'
         data-aos-easing='Ease in Cubic'
        >
        <Box >
          <Icon>
            <TfiReload />
          </Icon>
          <HeaderText>편리한 상품 연동</HeaderText>
          <InnerText>
            추가 상품 등록 NO!<br/>
            API 연동기능을 활용하여<br/>
            편리하게 상품 등록 가능
          </InnerText>
        </Box>

        <Box>
          <Icon>
            <LiaCalendarCheckSolid />
          </Icon>
          <HeaderText>1일 1정산</HeaderText>
          <InnerText>
            파트너사들의 원활한<br/>
            쇼핑몰 운영을 위한 업계 최초<br/>
            데일리 정산 시스템 도입
          </InnerText>
        </Box>

        <Box>
          <Icon>
            <HiOutlineComputerDesktop />
          </Icon>          
          <HeaderText>쉽고 간편한 운영</HeaderText>
          <InnerText>
            주문통합 관리 시스템 연동 및<br/>
            직관적인 파트너센터 활용을 통한<br/>
            운영 리소스 최소화
          </InnerText>
        </Box>
      </CardBox>
    </Container>
  )
}

export default Section2

const Container = styled.div`
  padding: 100px 0;
`;
const Title = styled.div`
  font-size: 36px;
  font-family: var(--fontExtraBold);
  text-align: center;
  span {
    color: var(--zPink);
  }
`;
const CardBox = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
`;
const Box = styled.div`
  background-color: var(--zLightGray);
  margin: 0 15px;
  padding: 20px 20px;
  text-align: center;
  border-radius: 20px;
`;
const Icon = styled.div`
  padding: 50px 0;
  font-size: 120px;
  color: var(--zPink);
`;
const HeaderText = styled.div`
    font-size: 36px;
    font-family: var(--fontExtraBold);
`;
const InnerText = styled.div`
  padding: 50px 0;
  color: var(--zGray);
  font-family: var(--fontBasic);
  line-height: 130%;
  font-size: 19px;
`;
