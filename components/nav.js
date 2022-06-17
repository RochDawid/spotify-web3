import NavLink from "./navLink";

const styles = {
  nav: `bg-black h-screen w-80 p-10`,
  link: `hover:text-[#fff]`,
};

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className="mb-10">
        <NavLink icon="assets/home.svg" title="Home" className={styles.link} />
        <NavLink
          icon="assets/search.svg"
          title="Search"
          className={styles.link}
        />
      </div>
    </div>
  );
};

export default Nav;
