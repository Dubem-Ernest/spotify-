import React from 'react'
import "./playerbody.css"
import Header from "./Header"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDataLayerValue } from "../../DataLayer";
import SongRow from './SongRow';

function PlayerBody({spotify}) {
  const [{discover_weekly}, dispatch] = useDataLayerValue();
  return (
    <div className='playbody'>
      <Header spotify={spotify}/>
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />

        <div className="bodyInfo__text">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>

      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className='body__shuffle'/>
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon/>

        </div>

        {discover_weekly?.tracks.items.map(item=>{
          return <SongRow track={item.track}/>
        })}

      </div>

    </div>

  )
}

export default PlayerBody