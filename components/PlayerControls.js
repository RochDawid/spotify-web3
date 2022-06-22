import { useContext } from "react";
import { SpotifyContext } from "../context/context";
import Image from "next/image";
import next from "../public/assets/next.svg";
import speaker from "../public/assets/speaker.svg";
import previous from "../public/assets/previous.svg";
import playRounded from "../public/assets/playRounded.svg";
import pauseIcon from "../public/assets/pause.svg";

const styles = {
  albumCoverContainer: `w-20 h-20 ml-10 mr-5 m:mb-2 m:ml-0`,
  coverPhoto: `object-cover`,
  mainControl: `flex items-center justify-between sticky bottom-0 w-full p-5 bg-[#242424] z-40 m:flex-col m:gap-2`,
  centerContainer: `flex items-center m:max-w-m sm:max-w-xs`,
  volumeContainer: `flex items-center mr-10 m:mt-2 m:mr-0`,
  progressBar: `w-96`,
  controlIcon: `flex items-center justify-center cursor-pointer w-10 h-10 hover:opacity-100 opacity-50 m:mb-2`,
  playIcon: `flex items-center justify-center cursor-pointer w-10 h-10 hover:opacity-50 m:mb-2`,
  pauseIconStyle: `flex items-center justify-center cursor-pointer w-10 h-10 hover:opacity-50 m:mb-2`,
  controlIconsContainer: `flex items-center justify-center gap-2`,
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
      <div className="flex flex-col items-center gap-2">
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
          onChange={(e) => onVolumeChange(e)}
          type="range"
          id="volume-range"
        />
      </div>
    </div>
  );
};

export default PlayerControls;
