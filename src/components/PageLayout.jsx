import React from 'react'
import styled from 'styled-components'
import Header from './MainScroll/Header'
import Main from './MainScroll/Main'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'

function PageLayout() {
  return (
    <Contianer>
      <Sticky>
        <Header />
        <Header style = {{visibility: hidden}} />
      </Sticky>
      
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Contianer>
  )
}

export default PageLayout

const Contianer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
`;
const Sticky = styled.div`
  position: absolute;
  position: sticky;
  top: 0;
  z-index: 100;
`;