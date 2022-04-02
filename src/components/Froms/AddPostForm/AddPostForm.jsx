import styles from "./AddPostForm.module.scss";
import closeIcon from "../../../assets/closeIcon.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArticlesActionCreators } from "../../../redux/reducers/articles/actionCreators";
import moment from "moment";
import useInput from "../../../hooks/UseInput";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const autorValid = useInput("", {isEmpty:true, minLength: 5}); // валидатор логина 
  const sourceValid = useInput("",{isEmpty:true, minLength:5});
   // валидатор пароля 
   const titleValid = useInput("",{isEmpty:true, minLength:5});
   const imageLinkValid = useInput("",{isEmpty:true, minLength:5});
   const tagsValid = useInput("",{isEmpty:true, minLength:5});
   const descriptionValid = useInput("",{isEmpty:true, minLength:5});
   const contentValid = useInput("",{isEmpty:true, minLength:5});
  // считываю текущие значения со всех инпутов 
  const GetTime = () => {
    moment().format('YYYY MM DD'); // получаю текущую дату для поста
  }

  const CreatePost = () => {
    const post = {
        source: sourceValid.value,
        tags: [
          tagsValid.value
        ],

        author: autorValid.value,
        title: titleValid.value,
        description: descriptionValid.value,
        coverImage: imageLinkValid.value,
        publishedAt: GetTime(),
        content: contentValid.value,
      
    }
    dispatch(ArticlesActionCreators.addArticle(post))
  }

  const isValid =  (!autorValid.value || !sourceValid.value || !titleValid.value || !imageLinkValid.value || !tagsValid.value || !descriptionValid.value || !contentValid.value)
  
  return (
    <form>
      <div className={styles.AddPostForm}>
        <div className={styles.AddPostFormContainer}>
          <div className={styles.AddPostFormText}>Создание поста</div>
          <Link to ='/admin'>
            <img src={closeIcon} alt="closeIcon" />
            </Link>
        </div>
        {(autorValid.isDirty && autorValid.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
          {(autorValid.isDirty && autorValid.minLengthError) && <div className={styles.error}>Рекомендуемая длина поля - 5 или больше</div>}
        <input
          type="text"
          placeholder="Автор"
          className={styles.AddPostFormAutor}
          onChange = {e => autorValid.onChange(e)}
          onBlur = {e => autorValid.onBlur(e)}
          value = {autorValid.value}
        />
        {(sourceValid.isDirty && sourceValid.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
          {(sourceValid.isDirty && sourceValid.minLengthError) && <div className={styles.error}>Рекомендуемая длина поля - 5 или больше</div>}
        <input
          type="text"
          placeholder="Источник"
          className={styles.AddPostFormSource}
          onChange = {e => sourceValid.onChange(e)}
          onBlur = {e => sourceValid.onBlur(e)}
          value = {sourceValid.value}
        />
        {(titleValid.isDirty && titleValid.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
          {(titleValid.isDirty && titleValid.minLengthError) && <div className={styles.error}>Рекомендуемая длина поля - 5 или больше</div>}
        <input
          type="text"
          placeholder="Заголовок"
          className={styles.AddPostFormTitle}
          onChange = {e => titleValid.onChange(e)}
          onBlur = {e => titleValid.onBlur(e)}
          value = {titleValid.value}
        />
        {(descriptionValid.isDirty && descriptionValid.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
          {(descriptionValid.isDirty && descriptionValid.minLengthError) && <div className={styles.error}>Рекомендуемая длина поля - 5 или больше</div>}
        <input
          type="text"
          placeholder="Описание"
          className={styles.AddPostFormAutor}
          onChange = {e => descriptionValid.onChange(e)}
          onBlur = {e => descriptionValid.onBlur(e)}
          value = {descriptionValid.value}
        />
        {(imageLinkValid.isDirty && imageLinkValid.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
          {(imageLinkValid.isDirty && imageLinkValid.minLengthError) && <div className={styles.error}>Рекомендуемая длина поля - 5 или больше</div>}
        <input
          type="text"
          placeholder="Ссылка на икноку поста"
          className={styles.AddPostFormImage}
          onChange = {e => imageLinkValid.onChange(e)}
          onBlur = {e => imageLinkValid.onBlur(e)}
          value = {imageLinkValid.value}
        />
        {(tagsValid.isDirty && tagsValid.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
          {(tagsValid.isDirty && tagsValid.minLengthError) && <div className={styles.error}>Рекомендуемая длина поля - 5 или больше</div>}
        <input
          type="text"
          placeholder="Теги"
          className={styles.AddPostFormTags}
          onChange = {e => tagsValid.onChange(e)}
          onBlur = {e => tagsValid.onBlur(e)}
          value = {tagsValid.value}
        />
        {(contentValid.isDirty && contentValid.isEmpty) && <div className={styles.error}>Поле не может быть пустым</div>}
          {(contentValid.isDirty && contentValid.minLengthError) && <div className={styles.error}>Рекомендуемая длина поля - 5 или больше</div>}
        <textarea
          type="text"
          placeholder="Контент"
          className={styles.AddPostFormContent}
          onChange = {e => contentValid.onChange(e)}
          onBlur = {e => contentValid.onBlur(e)}
          value = {contentValid.value}
        />
        <Link to='/admin'>
        <button disabled = {isValid} onClick={() => CreatePost()} className={styles.AddPostFormButton}>Создать пост</button>
        </Link>
      </div>
      
    </form>
  );
};

export default AddPostForm;
