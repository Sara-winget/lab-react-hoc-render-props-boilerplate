import React from 'react'
function Lpost({count,increcount}){
    return(
        <button onClick={increcount}>Lpost {count}</button>
    )
}
export default Lpost