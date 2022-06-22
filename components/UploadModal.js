import style from "../styles/UploadModal.module.css";

const UploadModal = ({
  title,
  artist,
  artistPhotoUrl,
  coverUrl,
  musicUrl,
  setTitle,
  setArtist,
  setArtistPhotoUrl,
  setCoverUrl,
  setMusicUrl,
  setShowUploadMusic,
  newMusic,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Upload a song</div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Title</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Artist</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Artist Photo Url</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            value={artistPhotoUrl}
            onChange={(e) => setArtistPhotoUrl(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Cover Url</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
          />
        </div>
      </div>
      <div className={style.inputField}>
        <div className={style.inputTitle}>Music Url</div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            value={musicUrl}
            onChange={(e) => setMusicUrl(e.target.value)}
          />
        </div>
      </div>
      <div className={style.modalButtons}>
        <button
          onClick={() => setShowUploadMusic(false)}
          className={`${style.button} ${style.cancelButton}`}
        >
          Cancel
        </button>
        <button
          onClick={newMusic}
          className={`${style.button} ${style.createButton}`}
        >
          Create New
        </button>
      </div>
    </div>
  );
};

export default UploadModal;
