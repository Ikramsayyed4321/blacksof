import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img src="/images/logo.jpeg" alt="do some coding logo" />
      </div>

      <ul className={styles.bordering}>
        <li>Solutions</li>
        <li>Services</li>
        <li>About</li>
        <li >Culture </li>

        <li className={styles.space}>
          Contact Us{" "}
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white text-gray-800 group-hover:text-gray-600 ">
            &#8594;
          </span>
        </li>
      </ul>
    </nav>
  );
};


export default Navigation;
