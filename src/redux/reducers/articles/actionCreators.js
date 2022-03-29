import axios from "axios";

export const ArticlesActionCreators = {
  setArticle: (payload) => ({ // 1 статья
    type: "SET_ARTICLE",
    payload,
  }),
  setArticles: (items) => ({ // создает новые статьи
    type: "SET_ARTICLES",
    payload: items,
  }),
  fetchArticles: () => async (dispatch) => {
    
    try {
        await axios.get(`http://localhost:8000/articles`)
        .then(({ data }) => {
          dispatch(ArticlesActionCreators.setArticles(data));
          // console.log(data) // передаю статьи в стор после их закгрузки с сервера
        }) 
      
    } catch (error) {
        
    }
    
  },
  fetchArticle: (id = '') => async (dispatch) => {
    
    try {
        await axios.get(`http://localhost:8000/articles/${id}`)
        .then(({ data }) => {
          dispatch(ArticlesActionCreators.setArticle(data));
          // console.log(data) // передаю статью(одну) в стор после их закгрузки с сервера
        }) 
      
    } catch (error) {
        
    }
    
  },
  
};
