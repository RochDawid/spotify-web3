import { useContext } from "react";
import { SpotifyContext } from "../context/context";
import Image from "next/image";
import next from "../assets/next.svg";
import previous from "../assets/previous.svg";
import speaker from "../assets/speaker.svg";
import repeat from "../assets/repeat.svg";
import shuffle from "../assets/shuffle.svg";
import playRounded from "../assets/playRounded.svg";
import pauseIcon from "../assets/pause.svg";

const styles = {
  albumCoverContainer: `w-20 h-20 mr-5`,
  coverPhoto: `object-cover`,
  mainControl: `fixed bottom-0 left-0 p-5 py-3 pr-10 w-screen bg-[#242424] z-40 flex items-center justify-between`,
  flexCenter: `flex items-center`,
  controlIcon: `mr-5 cursor-pointer hover:opacity-100 opacity-50`,
  playIcon: `mr-5 mb-3 w-10 h-10 cursor-pointer hover:opacity-50`,
  pauseIconStyle: `mt-3 w-10 h-10 cursor-pointer hover:opacity-50`,
  controlIconsContainer: `flex items-center justify-center mb-2`,
};

const PlayerControls = () => {
  const {
    currentSong,
    isPaused,
    isPlaying,
    play,
    pause,
    timestamp,
    progress,
    volume,
    onVolumeChange,
    onProgressChange,
    playNext,
    playPrevious,
  } = useContext(SpotifyContext);

  if (!isPlaying) return null;

  return (
    <div className={styles.mainControl}>
      <div className={styles.flexCenter}>
        <div className={styles.albumCoverContainer}>
          <Image
            src={currentSong.cover}
            className={styles.coverPhoto}
            height={200}
            width={200}
            alt="song cover"
          />
        </div>
        <div>
          <p>{currentSong.title}</p>
          <p className="opacity-50">{currentSong.artist}</p>
        </div>
      </div>
      <div>
        <div className={styles.controlIconsContainer}>
          <div className={styles.controlIcon}>
            <Image src={shuffle} alt="shuffle" />
          </div>
          <div
            onClick={(e) => playPrevious(songs)}
            className={styles.controlIcon}
          >
            <Image src={previous} alt="previous song" />
          </div>

          {isPaused ? (
            <div className={styles.playIcon} onClick={play}>
              <Image src={playRounded} alt="play" />
            </div>
          ) : (
            <div className={styles.pauseIconStyle} onClick={pause}>
              <Image src={pauseIcon} alt="pause" />
            </div>
          )}

          <div onClick={() => playNext(songs)} className={styles.controlIcon}>
            <Image src={next} alt="" />
          </div>
          <div className={styles.controlIcon}>
            <Image src={repeat} alt="repeat" />
          </div>
        </div>
        <div className={styles.flexCenter}>
          <small>{timestamp}</small>
          <input
            value={progress}
            onChange={(e) => onProgressChange(e)}
            type="range"
          />
          <small>{currentSong.songLength}</small>
        </div>
      </div>

      <div>
        <div className={styles.flexCenter}>
          <Image src={speaker} alt="volume" />
          <input
            value={volume}
            onChange={(e) => onVolumeChange(e)}
            type="range"
            id="volume-range"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
