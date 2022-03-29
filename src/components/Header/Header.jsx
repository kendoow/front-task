import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = ({to,title}) => {
  return ( // передаю куда прейти через props в Link
    <header className={styles.header}> 
      <div className="headerinput"> 
        <input type="text" placeholder="Поиск" /> 
        <Link className={styles.headerLink} to={to}>{title}</Link> 
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
