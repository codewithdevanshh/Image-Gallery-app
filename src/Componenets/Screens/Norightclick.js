import React from 'react'

function Norightclick({children}) {
    const handle=(e)=>{
        e.preventDefault();
    }
  return (
    <div onContextMenu={handle}>
        {children}
    </div>
  )
}

export default Norightclick