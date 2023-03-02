import React from 'react'
import "./songrow.css"

function SongRow({track}) {
  return (
    <div className='song__row'>
        <img className='songrow__album' src={track.album.images[0].url} alt="" />

        <div className="songRow__info">
            <h1>{track.name}</h1> 
            <p>{track.artists.map((artist)=>{
                return artist.name}).join(" ,")} -{" "} {track.album.name}</p>
        </div>
    </div>
  )
}

export default SongRow