import Image from "next/image";
import UploadButton from "./UploadButton";
import { useWallet } from "@solana/wallet-adapter-react";
import { useContext } from "react";
import { SpotifyContext } from "../context/context";

const styles = {
  header: "max-w-7xl m-auto p-3",
  headerWrapper: "flex items-center justify-between",
  headerRight: "flex",
  profile:
    "flex items-center bg-black rounded-full p-1 px-2 bg-opacity-50 cursor-pointer hover:bg-opacity-75",
  profileAvatarContainer: "w-7 h-7 rounded-full mr-3 flex items-center",
  playlistTextContent: "flex mt-10",
  controlsContainer: "flex items-center mt-10",
  playButton:
    "bg-green-500 w-16 h-16 mr-2 rounded-full flex pl-2 items-center justify-center cursor-pointer",
  arrowButton:
    "bg-black mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-0 cursor-pointer hover:bg-opacity-25",
  iconContainer:
    "ml-10 bg-black bg-opacity-0 rounded-full p-1 flex cursor-pointer hover:bg-opacity-25",
  title: "text-6xl font-bold",
};

const Header = ({ setShowUploadMusic, firstSong }) => {
  const wallet = useWallet();
  const { currentSong, playOnSelect } = useContext(SpotifyContext);

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className="flex items-center">
          <div className={styles.arrowButton}>
            <Image
              src="/assets/chevronLeft.svg"
              width={20}
              height={20}
              alt="left"
            />
          </div>
          <div className={styles.arrowButton}>
            <Image
              src="/assets/chevronRight.svg"
              width={20}
              height={20}
              alt="right"
            />
          </div>
        </div>
        <div className={styles.headerRight}>
          {setShowUploadMusic && <UploadButton setShowUploadMusic={setShowUploadMusic} />}
          <div className={styles.profile}>
            <div className={styles.profileAvatarContainer}>
              <Image
                src="/assets/avatar.jpg"
                width={50}
                height={50}
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <p>{wallet.publicKey.toString().substring(0,15)}...</p>
          </div>
        </div>
      </div>
      <div className={styles.playlistTextContent}>
        <Image
          src="https://latinomp3.co/wp-content/uploads/2022/05/Bad-Bunny-Un-Verano-Sin-Ti-2022-300x300-1-300x300.jpg?v=1651765689"
          width={220}
          height={220}
          alt="song"
        />
        <div className="flex-col h-2 justify-between ml-5">
          <div>
            <>Song</>
            <div className={styles.title}>{currentSong.title || "No song is playing currently"}</div>
          </div>
          <div className="flex items-center mt-5">
            <div className={styles.profileAvatarContainer}>
              <Image
                src="https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s88-c-k-c0x00ffffff-no-rj"
                width={25}
                height={25}
                alt="artist"
                className="rounded-full"
              />
            </div>
            <p>
              <span className="text-bold">{currentSong.artist}</span> • 2022 • 46 songs, 3 hr 20 min
            </p>
          </div>
        </div>
      </div>
      <div className={styles.controlsContainer}>
        <div onClick={() => playOnSelect(firstSong.account)} className={styles.playButton}>
          <Image src="/assets/play.svg" width={30} height={30} alt="play" />
        </div>
        <div className={styles.iconContainer}>
          <Image src="/assets/more.svg" width={30} height={30} alt="more" />
        </div>
      </div>
    </div>
  );
};

export default Header;
