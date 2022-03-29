import axios from "axios";

export const AuthActionCreators = {
  setUser: (user) => ({
    type: "SET_USER",
    payload: user,
  }),
  setIsAuth: (auth) => ({
    type: "SET_AUTH",
    payload: auth,
  }),
  setIsLoading: (payload) => ({
    type: "SET_IS_LOADING",
    payload,
  }),
  setError: (payload) => ({
    type: "SET_ERROR",
    payload,
  }),
  login: (login, password) => async (dispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await axios.get("http://localhost:8000/users"); // достаю пользователей
      const LoggedUsers = response.data.find(
        (user) => user.login === login && user.password === password // проверка пароля
      );
      
      if (LoggedUsers) {
        dispatch(AuthActionCreators.setError(""));
        
        localStorage.setItem("auth", "true");
        localStorage.setItem("username", LoggedUsers.username);
        dispatch(AuthActionCreators.setUser(LoggedUsers)); // передаю пользователя в стейт
        dispatch(AuthActionCreators.setIsLoading(false)); 
        dispatch(AuthActionCreators.setIsAuth(true)); // регистрация пройдена
           
      } else {
        dispatch(AuthActionCreators.setError("Некорректный логин или пароль"));
      }
    
    } catch (e) {
      dispatch(AuthActionCreators.setError("Произошла ошибка при логине"));
    }
  },
};
