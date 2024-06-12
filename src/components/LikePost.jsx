import React, { useState } from 'react'
import parentComp from './HOC'
function LikePost({handleCount,counter}) {

  

  return (
    <div>
      <button onClick={handleCount}>Like Post {counter}</button>
    </div>
  )
}
export default parentComp(LikePost)