import React from 'react'
import styled from 'styled-components'
import useScrollCount from '../../hooks/useScrollCount';



function Section1() {
  // const animatedItem = useScrollCount();
  const countItem = {
    0: useScrollCount(4000,3600,0),
    1: useScrollCount(370,30, 2000),
    2: useScrollCount(8, 1, 1700),
  };
  return (
    <Container>
      <Title>
        <h2>앱 주요 수치</h2>
      </Title>
      

      <CountBox>
        <Box>
          <InnerText>누적 다운로드 수</InnerText>
          <Number>
            <span {...countItem[0]}>0</span>명
          </Number>
          
        </Box>
        <Box>
          <InnerText>월 이용자 수</InnerText>
          <Number {...countItem[1]}>0<p>만</p></Number>
        </Box>
        <Box>
          <InnerText>파트너 수</InnerText>
          <Number>1만 <span {...countItem[2]}></span>천+</Number>
        </Box>
        <Box>
          <InnerText>연간 거래액</InnerText>
          <Number>1조원+</Number>
        </Box>
      </CountBox>
    </Container>
  )
}

export default Section1

const Container = styled.div`

  padding: 200px 0;
`;
const Title = styled.div`
  text-align: center;
  font-family: var(--fontExtraBold);
  font-size: 36px;
  height: 100%;
`;
const CountBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  padding: 100px 23.5px 0 23.5px;
`;
const Box = styled.div`

`;
const InnerText = styled.div`
  font-size: 19px;
  font-family: var(--fontBasic);
  padding-bottom: 12px;
`;
const Number = styled.div`
  font-size: 44px;
  font-family: var(--fontExtraBold);
  color: var(--zPink);
  display: flex;
  justify-content: center;
`;