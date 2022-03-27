import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import useInput from "../../hooks/UseInput";
import { useState } from "react";

const Loing = () => {
  const [showPassword, setShowPassword] = useState(false); // скрыть показать пароль
  const email = useInput("", {isEmpty:true, minLength: 3});
  const password = useInput("",{isEmpty:true, minLength:5});
  return (
    <div className={styles.login}>
      <div className={styles.loginForm}>
        <form>
          <h1 className={styles.loginTitle}>Вход</h1>
          {(email.isDirty && email.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
          {(email.isDirty && email.minLengthError) && <div className={styles.error}>Некорректная длина логина</div>}
          
          <input

          onChange={e => email.onChange(e)}
          onBlur = {e => email.onBlur(e)}
          value={email.value}
            type="email"
            className={styles.loginEmail}
            placeholder="Логин или почта"
          />
            {(password.isDirty && password.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
            {(password.isDirty && password.minLengthError) && <div className={styles.error}>Некорректная длина пароля</div>}
          <input
          name="password"
          onChange={e => password.onChange(e)}
          onBlur = {e => password.onBlur(e)}
          value={password.value}
            type={showPassword ?"text": "password"  } // скрыть показать пароль тоглер
            className={styles.loginPassword}
            placeholder="Пароль"
          />
         <label className={styles.passwordCheckboxWrapper}><input onClick={() => setShowPassword(!showPassword)} type="checkbox" className={styles.passwordCheckbox}/> Показать пароль</label>
    
          <Link to="/">
            <button disabled = {!email.inputVaild || !password.inputVaild} type="submit">Войти</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Loing;
