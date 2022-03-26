import { Link } from "react-router-dom";
import NewsImg from "../../assets/newsCard.png";
import styles from "./NewsCard.module.scss";
const NewsCard = ({title,type}) => {
  return (
    <Link to = './news' className={styles.news}>
      <h2 className={styles.newsTitle}>{title}</h2>
      <div className={styles.newsText}>
        <p className={styles.newsDescription}>{type}</p>
        <img src={NewsImg} alt="newsIcon" className={styles.Icon} />
      </div>
    </Link>
  );
};

export default NewsCard;
