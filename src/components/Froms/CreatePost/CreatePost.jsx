import React from "react";
import styles from "./CreatePost.module.scss";
import closeIcon from "../../../assets/closeIcon.svg";
import { Link } from "react-router-dom";
const CreatePost = () => {
  const handleFormHide = () => {};
  return (
    <form>
      <div className={styles.CreatePost}>
        <div className={styles.CreatePostContainer}>
          <div className={styles.CreatePostText}>Создание поста</div>
          <Link to ='/admin'>
            <img src={closeIcon} alt="closeIcon" />
            </Link>
        </div>
        <input
          type="text"
          placeholder="Автор"
          className={styles.CreatePostAutor}
        />
        <input
          type="text"
          placeholder="Источник"
          className={styles.CreatePostSource}
        />
        <input
          type="text"
          placeholder="Заголовок"
          className={styles.CreatePostTitle}
        />
        <input
          type="text"
          placeholder="Ссылка на икноку поста"
          className={styles.CreatePostImage}
        />
        <input
          type="text"
          placeholder="Теги"
          className={styles.CreatePostTags}
        />
        <textarea
          type="text"
          placeholder="Описание"
          className={styles.CreatePostDescription}
        />
        <Link to='/admin'>
        <button className={styles.CreatePostButton}>Создать пост</button>
        </Link>
      </div>
      
    </form>
  );
};

export default CreatePost;
