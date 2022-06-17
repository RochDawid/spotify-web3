import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Web 3.0</title>
        <link rel="icon" href="/favicon.png" />
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
