import React from "react";
import "./sidebar.css";
import SideBarOptions from "./SideBarOptions.jsx";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../../DataLayer";

function SideBar() {
  // eslint-disable-next-line
  const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="spotify__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-logo"
      />

      <SideBarOptions Icon={HomeIcon} title="Home" />
      <SideBarOptions Icon={SearchIcon} title="Search" />
      <SideBarOptions Icon={LibraryMusicIcon} title="Your Library" />
      <br />

      <strong className="playlist">PLAYLISTS</strong>

      <hr />

      {playlists ? playlists?.items?.map(playlist=>{
        return <SideBarOptions  title={playlist.name} />
      }) : <><SideBarOptions  title="Rock" />
              <SideBarOptions  title="RnB" />
              <SideBarOptions  title="Classic" />
      </>}
    </div>
  );
}

export default SideBar;
