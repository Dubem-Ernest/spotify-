import React from 'react'
import SideBar from "./SideBar"
import PlayerBody from "./PlayerBody"
import Footer from "./Footer"
import "./player.css"

function Player({spotify}) {
  return (
    <div className='player'>
      <div className="player_body">
           <SideBar/>
           <PlayerBody spotify={spotify}/>
      </div>

      <Footer/>
    </div>
  )
}

export default Player