import { Link } from "react-router-dom";
import News from "../../pages/News";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="headerinput">
        <input type="text" placeholder="Поиск" />
        <Link className={styles.headerLink} to="/login">Новая запись</Link>
      </div>
      <div className="headeruser">
        <div className="userIcon">
          123
        </div>
      </div>
    </header>
  );
};

export default Header;
