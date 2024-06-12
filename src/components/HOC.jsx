import React from 'react'
import { useState } from 'react';
const parentComp=(Childcomp)=>{
    function Aa(){
        const [likeCounter, setLikeCounter] = useState(0);

        const handleCount = ()=>{
          setLikeCounter(likeCounter+1);
        }

        return<Childcomp handleCount={handleCount} counter={likeCounter}/>
    }
    return Aa;
}
export default parentComp;