import { useContext } from "react";
import { SpotifyContext } from "../context/context";
import Image from "next/image";
import next from "../public/assets/next.svg";
import speaker from "../public/assets/speaker.svg";
import previous from "../public/assets/previous.svg";
import playRounded from "../public/assets/playRounded.svg";
import pauseIcon from "../public/assets/pause.svg";

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

const PlayerControls = ({ songs }) => {
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
    secondsToMin,
  } = useContext(SpotifyContext);

  if (!isPlaying) return null;

  return (
    <div className={styles.mainControl}>
      <div className={styles.flexCenter}>
        <div className={styles.albumCoverContainer}>
          <Image
            src={
              currentSong.coverUrl ||
              "https://latinomp3.co/wp-content/uploads/2022/05/Bad-Bunny-Un-Verano-Sin-Ti-2022-300x300-1-300x300.jpg?v=1651765689"
            }
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
        </div>
        <div className={styles.flexCenter}>
          <small>{timestamp}</small>
          <input
            value={progress}
            onChange={(e) => onProgressChange(e)}
            type="range"
          />
          <small>
            {(document.querySelector("#audio-element").duration &&
              secondsToMin(
                document.querySelector("#audio-element").duration
              )) ||
              ""}
          </small>
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
