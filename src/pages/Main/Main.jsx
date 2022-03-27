import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import News1 from "../../components/News/NewsCard";
import styles from "./Main.module.scss";
const Main = () => {
  const {isAuth} = useSelector(state => state.auth) // вытаскиваю состояние из редюсера зареган/нет 
  return (
    <>
      {  isAuth ? 123 : <Header /> }
        <div className={styles.newsContainer}>
          <News1
            type={"Новость"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
        </div>
    </>
  );
};

export default Main;
