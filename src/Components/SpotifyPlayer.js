import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyApi";
import "./SpotifyPlayer.css";

function SpotifyPlayer(props) {
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
    });
  }, []);

  return result.isPlaying ? (
    <div className="nowplayingcard">
      <div className="nowplayingcontainer-inner">
        <img id="trackart" src={result.albumImageUrl}></img>
        <div className="trackInfo">
          <a id="tracktitle">{result.title}</a>
          <a href="#" id="trackartist">
            {result.artist}
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div>Not playing</div>
  );
}

export default SpotifyPlayer;
