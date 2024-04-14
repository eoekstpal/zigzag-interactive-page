import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Main1 from './Main1'
import Main2 from './Main2'
import Section1 from './Section1'
import Section2 from './Section2'

function PageLayout() {
  return (
    <Contianer>
      <Sticky>
        <Header />
      </Sticky>
      
      <Main1 />
      <Main2 />
      <Section1 />
      <Section2 />
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
`;