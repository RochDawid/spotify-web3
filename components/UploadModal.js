import style from "../styles/UploadModal.module.css";

const UploadModal = ({
  title,
  setTitle,
  musicUrl,
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
