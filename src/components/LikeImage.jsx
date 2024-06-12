import React, { useState } from 'react'
import parentComp from './HOC';
 function LikeImage({handleCount,counter}) {

  
  return (
    <div>
      <button onClick={handleCount}>Like Image {counter}</button>
    </div>
  )
}
export default parentComp(LikeImage);