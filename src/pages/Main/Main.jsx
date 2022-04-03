import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import NewsCard from "../../components/NewsCard/NewsCard";
import Pagination from "../../components/Pagination/Pagination";
import { ArticlesActionCreators } from "../../redux/reducers/articles/actionCreators";

import styles from "./Main.module.scss";
const Main = () => {
  const dispatch = useDispatch();
  const { items, perPage, currentPage } = useSelector(
    (state) => state.articles
  );
  
  const { isAuth } = useSelector((state) => state.auth);
  const [value, setValue] = useState(""); // фильтрация
  const totalCount = items.length;

  const pagesCount = Math.ceil(totalCount / perPage); // высчитываю сколько страниц надо добавить в pages
  const LastPageIndex = currentPage * perPage
  const FirstPageIndex = LastPageIndex - perPage
  
  useEffect(() => {
    dispatch(ArticlesActionCreators.fetchArticles());
  }, [dispatch]);

 

  // Форматирование даты из unixtimestamp в обычную
  const getDate = (date) => {
    moment.locale("ru");
    date = moment(date).format("MMMM D, YYYY");
    return date.toUpperCase();
  };
  console.log(currentPage)
  const hadleSelectPost = (post) => {
    // функция которая устанавливает текущий пост чтобы получить из него значения для редактирования
    dispatch(ArticlesActionCreators.setSelectedPost(post));
  };

  const filteredPosts = items.slice(FirstPageIndex,LastPageIndex).filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase()); // поиск по запросу + отображение нужного количества страниц
  });

  return (
    <>
      {" "}
      {isAuth ? (
        <Header
          valueprop={value}
          SetValueprop={setValue}
          to={"/admin/createPost"}
          title="Создать запись"
        />
      ) : (
        <Header
          valueprop={value}
          SetValueprop={setValue}
          to={"/login"}
          title="Новая запись"
        />
      )}
      {!value.includes(filteredPosts) ? (
        <div className={styles.newsContainer}>
          {filteredPosts.map((obj) => {
            return (
              <NewsCard
                id={obj.id}
                key={obj.id}
                title={obj.title}
                author={obj.author}
                articles={obj.articles}
                tags={obj.tags.map((obj) => (
                  <div>{obj}</div>
                ))}
                description={obj.description}
                source={obj.source}
                image={obj.coverImage}
                publishedAt={getDate(obj.publishedAt)}
                hadleSelectPost={() => hadleSelectPost(obj)}
              />
            );
          })}
          <Pagination perPage = {perPage} totalPosts = {items.length}/>
        </div>
      ) : (
        <div className={styles.errorMessage}>
          {" "}
          По вашему запросу {value} ничего не найдено
        </div>
      )}
        
    </>
  );
};

export default Main;
