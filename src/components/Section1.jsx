import React from 'react'
import styled from 'styled-components'

function Section1() {
  return (
    <Container>
      <Title>
        <h2>앱 주요 수치</h2>
      </Title>

      <CountBox>
        <Box>
          <InnerText>누적 다운로드 수</InnerText>
          <Number>4,000만+</Number>
        </Box>
        <Box>
          <InnerText>월 이용자 수</InnerText>
          <Number>370만</Number>
        </Box>
        <Box>
          <InnerText>파트너 수</InnerText>
          <Number>1만 8천+</Number>
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
  margin: 50px 0;
  padding: 100px 20px;
`;
const Title = styled.div`
  text-align: center;
  font-family: var(--fontExtraBold);
  font-size: 36px;

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
`;