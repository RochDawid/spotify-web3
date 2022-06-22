import Image from "next/image";
import UploadButton from "./UploadButton";
import { useWallet } from "@solana/wallet-adapter-react";
import { useContext, useState } from "react";
import { SpotifyContext } from "../context/context";
import Logout from "../public/assets/logout.png";
import Avatar from "../public/assets/avatar.png";
import Play from "../public/assets/play.svg";

const styles = {
  header: "max-w-7xl m-auto p-3",
  headerWrapper: "flex justify-end",
  headerRight: "flex",
  profile:
    "flex items-center bg-black rounded-full p-1 px-2 bg-opacity-50 cursor-pointer hover:bg-opacity-75 hover:scale-95 transition",
  profileAvatarContainer: "w-7 h-7 rounded-full mr-3 flex items-center",
  playlistTextContent: "flex mt-10",
  controlsContainer: "flex items-center mt-10",
  playButton:
    "bg-green-500 w-16 h-16 mr-2 rounded-full flex pl-2 items-center justify-center cursor-pointer hover:scale-95 transition",
  title: "text-6xl font-bold",
};

const Header = ({ setShowUploadMusic, firstSong }) => {
  const wallet = useWallet();
  const { currentSong, playOnSelect } = useContext(SpotifyContext);
  const [hoveringProfile, setIsHoveringProfile] = useState(false);

  const profileClicked = async () => {
    await wallet.disconnect();
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerRight}>
          {setShowUploadMusic && (
            <UploadButton setShowUploadMusic={setShowUploadMusic} />
          )}
          <div
            onClick={profileClicked}
            onMouseEnter={() => setIsHoveringProfile(!hoveringProfile)}
            onMouseLeave={() => setIsHoveringProfile(!hoveringProfile)}
            className={styles.profile}
          >
            <div className={styles.profileAvatarContainer}>
              <Image
                src={hoveringProfile ? Logout : Avatar}
                width={50}
                height={50}
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <p>{wallet.publicKey.toString().substring(0, 15)}...</p>
          </div>
        </div>
      </div>
      <div className={styles.playlistTextContent}>
        <img
          src={currentSong.coverUrl || "/assets/album.png"}
          width={220}
          height={220}
          alt="song"
        />
        <div className="flex-col h-full justify-between ml-5">
          <div className={styles.title}>
            {currentSong.title || "No song is playing currently"}
          </div>
          <div className="flex items-center mt-5">
            <div className={styles.profileAvatarContainer}>
              <img
                src={currentSong.artistPhotoUrl || "/assets/artist.png"}
                width={25}
                height={25}
                alt="artist"
                className="rounded-full"
              />
            </div>
            <p>
              <span className="text-bold mt-10">
                {currentSong.artist || "No one"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.controlsContainer}>
        <div
          onClick={() => playOnSelect(firstSong.account)}
          className={styles.playButton}
        >
          <Image src={Play} width={30} height={30} alt="play" />
        </div>
      </div>
    </div>
  );
};

export default Header;
