import { Link } from "react-router-dom";
import styles from "./NewsCard.module.scss";
import editIcon from '../../assets/editIcon.svg'
import { useSelector } from "react-redux";
const NewsCard = ({
  title,
  tags,
  image,
  description,
  author,
  source,
  publishedAt,
  id,
  hadleSelectPost
}) => {

  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Link to={`/news/${id}`} className={styles.news}>
      <div className={styles.newsHeader}>
        {isAuth ? <Link to = '/admin/editPost'> <button onClick={hadleSelectPost}> <img className={styles.editIcon} src={editIcon} alt="editIcon" /></button> </Link> : ""}
        

        <div className={styles.newsHeaderText}>
        <p className={styles.autor}>Autor: {author}</p>
        <p className={styles.source}>Source: {source}</p>
        
        </div>
        
      </div>
      <div className={styles.newsText}>
        <h2 className={styles.newsTitle}>{title}</h2>
        <p className={styles.newsDescription}>{description}</p>
      </div>
      <div className={styles.newsAdditional}>
        <img src={image} alt="newsIcon" className={styles.Icon} />
        <div className={styles.newsAdditionalTags}>
          <p className={styles.publishedAt}>{publishedAt}</p>
          <div className={styles.tags}>Tags:{tags}</div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
