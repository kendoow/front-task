import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ArticlesActionCreators } from '../../redux/reducers/articles/actionCreators';
import styles from './News.module.scss'
const News = ({title,content}) => { 
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(ArticlesActionCreators.fetchArticle(id));
  }, [dispatch,id]);
  
  return (
    <div className={styles.news}>
      <h2 className={styles.newsTitle}>{title}</h2>
      <p className={styles.newsText}>
        {content}
      </p>
    </div>
  );
};

export default News;
