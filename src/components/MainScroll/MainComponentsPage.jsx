import React from 'react'
import Main1 from './Main1'
import Main2 from './Main2';
import CompoScroll from './CompoScroll';

const componentsData = [
  { id: 1, compo: <Main1 /> },
  { id: 2, compo: <Main2 /> }
];

function MainComponentsPage() {
  return (
    <div style={{ height: window.innerHeight * 4 }}>
      {componentsData.map((component) => (
        <CompoScroll
          compo={component.compo}
          key={component.id}
        />
      ))}
    </div>
  )
}

export default MainComponentsPage