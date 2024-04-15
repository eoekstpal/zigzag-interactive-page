import React from 'react'
import styled from 'styled-components'

function CompoScroll({ compo }) {
  return (
    <Parents>
      <ScrollComponent>
        <div>{compo}</div>
      </ScrollComponent>
    </Parents>
  )
}

export default CompoScroll

const Parents = styled.div`
  width: 100%;
  height: 200vh;
  position: sticky;
  top: 0;
`;

const ScrollComponent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`;
