import Nav from "../components/nav";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import useSpotify from "../hooks/useSpotify";
import UploadModal from "../components/UploadModal";
import Playlist from "../components/Playlist";
import PlayerControls from "../components/PlayerControls";

const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [songs, setSongs] = useState([]);
  const { newMusic, getSongs } = useSpotify(
    artist,
    setArtist,
    title,
    musicUrl,
    setTitle,
    setMusicUrl,
    setShowUploadMusic
  );

  useEffect(async () => {
    const songs = await getSongs();
    setSongs(songs);
  }, []);

  return (
    <div className="flex">
      <Nav />
      <div className="w-full m-5">
        <Header setShowUploadMusic={setShowUploadMusic} firstSong={songs[0]} />
        <Playlist songs={songs} />
        <PlayerControls songs={songs} />
        {showUploadMusic && (
          <UploadModal
            title={title}
            setTitle={setTitle}
            artist={artist}
            setArtist={setArtist}
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
