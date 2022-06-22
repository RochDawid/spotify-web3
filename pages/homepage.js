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
  const [artistPhotoUrl, setArtistPhotoUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [songs, setSongs] = useState([]);
  const [newMusic, getSongs] = useSpotify(
    artist,
    setArtist,
    title,
    musicUrl,
    coverUrl,
    setCoverUrl,
    artistPhotoUrl,
    setArtistPhotoUrl,
    setTitle,
    setMusicUrl,
    setShowUploadMusic
  );

  useEffect(async () => {
    const songs = await getSongs();
    setSongs(songs);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex w-full">
        <div className="w-full m-5">
          <Header
            setShowUploadMusic={setShowUploadMusic}
            firstSong={songs[0]}
          />
          <Playlist songs={songs} />
          {showUploadMusic && (
            <UploadModal
              title={title}
              setTitle={setTitle}
              artist={artist}
              setArtist={setArtist}
              coverUrl={coverUrl}
              setCoverUrl={setCoverUrl}
              artistPhotoUrl={artistPhotoUrl}
              setArtistPhotoUrl={setArtistPhotoUrl}
              musicUrl={musicUrl}
              setMusicUrl={setMusicUrl}
              newMusic={newMusic}
              setShowUploadMusic={setShowUploadMusic}
            />
          )}
        </div>
      </div>
      <PlayerControls songs={songs} />
    </div>
  );
};

export default HomePage;
