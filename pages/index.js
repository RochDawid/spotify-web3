import Head from "next/head";
import Login from "../components/Login";
import { useContext } from "react";
import { SpotifyContext } from "../context/context";

export default function Home() {
  const { updateProgress, updateVolume } = useContext(SpotifyContext);

  return (
    <div className="min-h-screen w-full">
      <Head>
        <title>Spotify Web 3.0</title>
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <audio
        id="audio-element"
        hidden
        playsInline
        onVolumeChange={(e) => updateVolume(e)}
        onTimeUpdate={(e) => updateProgress(e)}
      />
      <Login />
    </div>
  );
}
