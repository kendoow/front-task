import { Link } from "react-router-dom";
import styles from "./NewsCard.module.scss";
const NewsCard = ({
  title,
  tags,
  image,
  description,
  author,
  source,
  publishedAt,
  id
}) => {
  return (
    <Link to={`/news/${id}`} className={styles.news}>
      <div className={styles.newsHeader}>
        <p className={styles.autor}>Autor: {author}</p>
        <p className={styles.source}>Source: {source}</p>
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
