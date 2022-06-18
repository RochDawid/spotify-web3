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

const Header = ({ setShowUploadMusic }) => {
  const wallet = useWallet();
  const { currentSong } = useContext(SpotifyContext);

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
          src="https://m.media-amazon.com/images/I/41unr4d1AkL._AC_SX466_.jpg"
          width={220}
          height={220}
          alt="album"
        />
        <div className="flex-col h-2 justify-between ml-5">
          <div>
            <>Album</>
            <div className={styles.title}>{currentSong.album}</div>
          </div>
          <div className="flex items-center mt-5">
            <div className={styles.profileAvatarContainer}>
              <Image
                src="https://www.highsnobiety.com/static-assets/thumbor/se6-ryo4pqA2AlEPe0bNoJL9fPw=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/12/19154009/album-of-the-year-main.jpg"
                width={25}
                height={25}
                alt="artist"
                className="rounded-full"
              />
            </div>
            <p>
              <span className="text-bold">{currentSong.artist}</span> • 2022 • 46 songs, 3 hr 20
              min
            </p>
          </div>
        </div>
      </div>
      <div className={styles.controlsContainer}>
        <div className={styles.playButton}>
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
