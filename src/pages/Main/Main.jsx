import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import NewsCard from "../../components/NewsCard/NewsCard";
import { ArticlesActionCreators } from "../../redux/reducers/articles/actionCreators";
import styles from "./Main.module.scss";
const Main = () => {
  const dispatch = useDispatch()
  
  const {items} = useSelector((state) => state.articles)
  
  useEffect(() => {
    dispatch(ArticlesActionCreators.fetchArticles());
  }, [dispatch]);
    // Форматирование даты из unixtimestamp в обычную
    const getDate = (date) => {
      moment.locale('ru');
      date = moment(date).format('MMMM D, YYYY');
      return date.toUpperCase();
    };
    console.log(items)
  return (
    
    <> 
       <Header to={'/login'} title = 'Новая запись'/> 
        <div className={styles.newsContainer}>
          {items.map((obj) => (
            <NewsCard
            id = {obj.id}
            key = {obj.id}
            title={obj.title}
            author={obj.author}
            articles = {obj.articles}
            tags = {obj.tags.map((obj ) =>(
              <div>{obj}</div>
            ))}
            description = {obj.description}
            source = {obj.source}
            image = {obj.coverImage}
            publishedAt = {getDate(obj.publishedAt)}
          />
          ))}
          
        </div>
    </>
  );
};

export default Main;
