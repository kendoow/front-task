import styles from "./Login.module.scss";
import useInput from "../../../hooks/UseInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthActionCreators } from "../../../redux/reducers/auth/actionCreators";
import Spiner from "../../Spiner/Spiner";
const Loing = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false); // скрыть показать пароль
  const loginValid = useInput("", {isEmpty:true, minLength: 3}); // валидатор логина 
  const passwordValid = useInput("",{isEmpty:true, minLength:5}); // валидатор пароля 
  const {error, isLoading} = useSelector(state => state.auth)
  const submit = () => {
    dispatch(AuthActionCreators.login(loginValid.value,passwordValid.value))
     // чтобы попасть в аккаунт достаю из валидатора value, т.к через useState 2й раз value из input не вытащить
     
  }
  return (
    <div className={styles.login}>
      <div className={styles.loginForm}>
        <form>
          <h1 className={styles.loginTitle}>Вход</h1>
          {(loginValid.isDirty && loginValid.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
          {(loginValid.isDirty && loginValid.minLengthError) && <div className={styles.error}>Некорректная длина логина</div>}
          {error && <div className={styles.error}>{error}</div>}
          <input

          onChange={e => loginValid.onChange(e)}
          onBlur = {e => loginValid.onBlur(e)}
          value={loginValid.value}
            type="email"
            className={styles.loginEmail}
            placeholder="Логин или почта"
          />
            {(passwordValid.isDirty && passwordValid.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>} 
            {(passwordValid.isDirty && passwordValid.minLengthError) && <div className={styles.error}>Некорректная длина пароля</div>} 
          <input
          name="password"
          onChange={e => passwordValid.onChange(e)}
          onBlur = {e => passwordValid.onBlur(e)}
          value={passwordValid.value}
            type={showPassword ? "text" : "password"  } // скрыть показать пароль тоглер
            className={styles.loginPassword}
            placeholder="Пароль"
          />
         <label className={styles.passwordCheckboxWrapper}><input onClick={() => setShowPassword(!showPassword)} type="checkbox" className={styles.passwordCheckbox}/> Показать пароль</label>
            
           {
             isLoading 
             ? 
             <Spiner/> 
             :
              
                  <button className={styles.button} onClick={submit} disabled = {!loginValid.inputVaild || !passwordValid.inputVaild} type="submit">Войти</button>
              
           }
          
          
          
        </form>
      </div>
    </div>
  );
};

export default Loing;
