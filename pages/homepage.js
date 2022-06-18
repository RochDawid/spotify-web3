import Nav from "../components/nav";
import { useState } from "react";
import Header from "../components/Header";
import useSpotify from "../hooks/useSpotify";
import UploadModal from "../components/UploadModal";
import Playlist from "../components/Playlist";
import PlayerControls from "../components/PlayerControls";
import { songs } from "../data/songs.js";

const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false);
  const [title, setTitle] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  //const [songs, setSongs] = useState([]);
  const { newMusic, getSongs } = useSpotify(
    title,
    musicUrl,
    setTitle,
    setMusicUrl,
    setShowUploadMusic 
  );

  return (
    <div className="flex">
      <Nav />
      <div className="w-full m-5">
        <Header setShowUploadMusic={setShowUploadMusic} />
        <Playlist songs={songs} />
        <PlayerControls />
        {showUploadMusic && (
          <UploadModal
            title={title}
            setTitle={setTitle}
            musicUrl={musicUrl}
            setMusicUrl={setMusicUrl}
            newMusic={newMusic}
            setShowUploadMusic={setShowUploadMusic}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
