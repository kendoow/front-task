import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
const Loing = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginForm}>
        <form>
          <h1 className={styles.loginTitle}>Вход</h1>
          <input type="email" className={styles.loginEmail} placeholder="Логин или почта" />
          <input
            type="password"
            className={styles.loginPassword}
            placeholder="Пароль"
          />
          <Link to="/">
            <button type="submit">Войти</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Loing;
