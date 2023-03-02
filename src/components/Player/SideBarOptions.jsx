import React from 'react'
import "./sidebaroptions.css"


function SideBarOptions({title,Icon}) {
  return (
    <div className='sidebarOption'>
        {Icon && <Icon className="Icon"/>}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}


    </div>
  )
}

export default SideBarOptions