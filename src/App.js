import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./components/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  // eslint-disable-next-line
  const [{ user, token }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({ type: "SET_USER", user: user });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        console.log(playlists)
        dispatch({type:"SET_PLAYLISTS", playlists:playlists})
      })

      spotify.getPlaylist('4Ky0smJfYty06vuzuMofqP').then(response=>{
        console.log(response)
        dispatch({type:"SET_DISCOVER_WEEKLY",discover_weekly:response}) 
      })
    }

    console.log(_token);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(token);
  console.log(user);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
