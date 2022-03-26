import Header from "../components/Header/Header";
import News1 from "../components/News/NewsCard";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <>
        <Header />
        <div className={styles.newsContainer}>
          <News1
            type={"Новость"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
          <News1
            type={"Статья"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
          <News1
            type={"Подкаст "}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
          <News1
            type={"Новость"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
          <News1
            type={"Новость"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
          <News1
            type={"Новость"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
          <News1
            type={"Новость"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
          <News1
            type={"Новость"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
          <News1
            type={"Новость"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
          <News1
            type={"Новость"}
            title="Японский депутат разоблачил манипуляцию Зеленского"
          />
        </div>
    </>
  );
};

export default Main;