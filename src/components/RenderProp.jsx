import React,{useState} from 'react'
function Counter({render}){
const [state,setState]=useState(0);

const increment=()=>{
    setState(prev=>prev+1);
}
    return(
    <div>

        {render(state,increment)}
    </div>
    )
}
export default Counter;