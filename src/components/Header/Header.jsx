import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = ({to,title,valueprop,SetValueprop}) => {

  return ( // передаю куда прейти через props to в Link
    <header className={styles.header}> 
      <div className="headerinput"> 
        <input value = {valueprop} onChange={(e) => SetValueprop(e.target.value)} type="text" placeholder="Поиск" /> 
        <Link className={styles.headerLink} to={to}>{title}</Link> 
      </div> 
      
    </header>
  );
};

export default Header;
