import React from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Grid,Slider } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footerAlbum__logo"
         src="data:image/jpeg;base64,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" alt="" />
        <div className="footersong__info">
          <h4>Yeah!!!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large"className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
         <PlaylistPlayIcon/>
          </Grid>

          <Grid item>
         <VolumeDownIcon/>
          </Grid>

          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
