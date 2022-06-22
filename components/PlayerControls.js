import { useContext } from "react";
import { SpotifyContext } from "../context/context";
import Image from "next/image";
import next from "../public/assets/next.svg";
import speaker from "../public/assets/speaker.svg";
import previous from "../public/assets/previous.svg";
import playRounded from "../public/assets/playRounded.svg";
import pauseIcon from "../public/assets/pause.svg";

const styles = {
  albumCoverContainer: `w-20 h-20 mr-5 m:mb-2`,
  coverPhoto: `object-cover`,
  mainControl: `flex items-center justify-around sticky bottom-0 py-5 w-screen bg-[#242424] z-40 m:flex-col gap-2`,
  centerContainer: `flex items-center m:max-w-m sm:max-w-sm`,
  volumeContainer: `flex items-center max-w-8 m:mt-2`,
  progressBar: `w-96`,
  volumeBar: ``,
  controlIcon: `mr-5 cursor-pointer hover:opacity-100 opacity-50 m:mb-2`,
  playIcon: `mr-5 mb-3 w-10 h-10 cursor-pointer hover:opacity-50 m:mb-2`,
  pauseIconStyle: `mt-3 w-10 h-10 cursor-pointer hover:opacity-50 m:mb-2`,
  controlIconsContainer: `flex items-center justify-center`,
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
      <div className="flex items-center">
        <div className={styles.albumCoverContainer}>
          <img
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
        <div className={styles.centerContainer}>
          <small>{timestamp}</small>
          <input
            value={progress}
            className={styles.progressBar}
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
      <div className={styles.volumeContainer}>
        <Image src={speaker} alt="volume" />
        <input
          value={volume}
          className={styles.volumeBar}
          onChange={(e) => onVolumeChange(e)}
          type="range"
          id="volume-range"
        />
      </div>
    </div>
  );
};

export default PlayerControls;
