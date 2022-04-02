import styles from "./EditPostForm.module.scss";
import closeIcon from "../../../assets/closeIcon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArticlesActionCreators } from "../../../redux/reducers/articles/actionCreators";
import moment from "moment";
import useInput from "../../../hooks/UseInput";
const EditPostForm = () => {
  const { selectedPost } = useSelector((state) => state.articles); // вытаскиваю текущий пост чтобы собрать данные для редактирования
  const dispatch = useDispatch();
  const autorValid = useInput(selectedPost.author, { isEmpty: true }); // валидатор логина
  const sourceValid = useInput(selectedPost.source, { isEmpty: true });
  // валидатор пароля
  const titleValid = useInput(selectedPost.title, { isEmpty: true });
  const imageLinkValid = useInput(selectedPost.coverImage, { isEmpty: true });
  const tagsValid = useInput(selectedPost.tags, { isEmpty: true });
  const descriptionValid = useInput(selectedPost.description, {
    isEmpty: true,
  });
  const contentValid = useInput(selectedPost.content, { isEmpty: true });
  // передаю значение из текущего поста в инпуты
  const GetTime = () => {
    moment().format("YYYY MM DD"); // получаю текущую дату для поста
  };

  const EditPost = () => {
    const post = {
      id:selectedPost.id,
      source: sourceValid.value,
      tags: [tagsValid.value],
      author: autorValid.value,
      title: titleValid.value,
      description: descriptionValid.value,
      coverImage: imageLinkValid.value,
      publishedAt: GetTime(),
      content: contentValid.value,
    };
    dispatch(ArticlesActionCreators.editArticle(post)); // отправляю изменения на сервер(при клике на кнопку)
  };

  const isValid =
    !autorValid.value ||
    !sourceValid.value ||
    !titleValid.value ||
    !imageLinkValid.value ||
    !tagsValid.value ||
    !descriptionValid.value ||
    !contentValid.value;

  return (
    <form>
      <div className={styles.AddPostForm}>
        <div className={styles.AddPostFormContainer}>
          <div className={styles.AddPostFormText}>Редактирование поста</div>
          <Link to="/admin">
            <img src={closeIcon} alt="closeIcon" />
          </Link>
        </div>
        {autorValid.isDirty && autorValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        <input
          type="text"
          placeholder="Автор"
          className={styles.AddPostFormAutor}
          onChange={(e) => autorValid.onChange(e)}
          onBlur={(e) => autorValid.onBlur(e)}
          value={autorValid.value}
        />
        {sourceValid.isDirty && sourceValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        <input
          type="text"
          placeholder="Источник"
          className={styles.AddPostFormSource}
          onChange={(e) => sourceValid.onChange(e)}
          onBlur={(e) => sourceValid.onBlur(e)}
          value={sourceValid.value}
        />
        {titleValid.isDirty && titleValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        <input
          type="text"
          placeholder="Заголовок"
          className={styles.AddPostFormTitle}
          onChange={(e) => titleValid.onChange(e)}
          onBlur={(e) => titleValid.onBlur(e)}
          value={titleValid.value}
        />
        {descriptionValid.isDirty && descriptionValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        <textarea
          type="text"
          placeholder="Описание"
          className={styles.AddPostFormDescr}
          onChange={(e) => descriptionValid.onChange(e)}
          onBlur={(e) => descriptionValid.onBlur(e)}
          value={descriptionValid.value}
        />
        {imageLinkValid.isDirty && imageLinkValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        <textarea
          type="text"
          placeholder="Ссылка на икноку поста"
          className={styles.AddPostFormImage}
          onChange={(e) => imageLinkValid.onChange(e)}
          onBlur={(e) => imageLinkValid.onBlur(e)}
          value={imageLinkValid.value}
        />
        {tagsValid.isDirty && tagsValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        <input
          type="text"
          placeholder="Теги"
          className={styles.AddPostFormTags}
          onChange={(e) => tagsValid.onChange(e)}
          onBlur={(e) => tagsValid.onBlur(e)}
          value={tagsValid.value}
        />
        {contentValid.isDirty && contentValid.isEmpty && (
          <div className={styles.error}>Поле не может быть пустым</div>
        )}
        <textarea
          type="text"
          placeholder="Контент"
          className={styles.AddPostFormContent}
          onChange={(e) => contentValid.onChange(e)}
          onBlur={(e) => contentValid.onBlur(e)}
          value={contentValid.value}
        />
        <Link to="/admin">
          <button
            disabled={isValid}
            onClick={() => EditPost()}
            className={styles.AddPostFormButton}
          >
            Отредактировать пост
          </button>
        </Link>
      </div>
    </form>
  );
};

export default EditPostForm;
