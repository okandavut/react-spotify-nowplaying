import logo from "./logo.svg";
import "./App.css";
import SpotifyPlayer from "../src/Components/SpotifyPlayer";

function App() {
  return (
    <div className="App">
      <SpotifyPlayer
        client_id="import client id"
        client_secret="import client secret"
        refresh_token="import refresh"
      />
    </div>
  );
}

export default App;
