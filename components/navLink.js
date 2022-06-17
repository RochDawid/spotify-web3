const styles = {
  navLink: `flex item-center mb-2 cursor-pointer hover:text-[#fff] text-[#b3b3b3] hover:bg-[#a0a0a044] p-3 rounded-md`,
  navLinkText: `ml-5 align-middle`,
  navLinkImage: `w-6 h-6`,
};

const NavLink = ({ title, icon }) => {
  return (
    <div className={styles.navLink}>
      <img alt="" src={icon} className={styles.navLinkImage} />
      <p className={styles.navLinkText}>{title}</p>
    </div>
  );
};

export default NavLink;
