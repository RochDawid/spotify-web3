const styles = {
  uploadButton: 'bg-green-500 truncate mr-5 px-3 py-1.5 rounded-full cursor-pointer hover:scale-95 transition'
};

const UploadButton = ({ setShowUploadMusic }) => {
  const uploadClicked = () => {
    setShowUploadMusic(true);
  }

  return (
    <div>
      <div onClick={uploadClicked} className={styles.uploadButton}>Upload song</div>
    </div>
  );
};

export default UploadButton;
