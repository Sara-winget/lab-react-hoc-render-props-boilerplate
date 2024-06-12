import React from 'react'
function LImage({count,increcount}){
    return(
        <div>

            <button onClick={increcount}>Like Image {count}</button>
        </div>
    )
}
export default LImage;
