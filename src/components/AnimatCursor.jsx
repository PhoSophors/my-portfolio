import React from 'react'

import AnimatedCursor from "react-animated-cursor"


const AnimatCursor = () => {
  return (
    <div className="App">
      <AnimatedCursor 
      innerSize={10}
      outerSize={40}
      outerStyle={{
        border: '1px solid red',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: 'yellow'
      }}
      color='255, 118, 190'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
        ,
        {
          target: '.custom',
          options: {
            innerSize: 20,
            outerSize: 20,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
      />
    </div>
  )
}

export default AnimatCursor