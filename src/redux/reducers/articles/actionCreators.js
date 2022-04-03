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
  addArticle : (artilce) => async (dispatch) =>{
    try {
      await axios.post('http://localhost:8000/articles',artilce)
      .then(({ artilce }) => {
        dispatch(ArticlesActionCreators.fetchArticles(artilce));
        // console.log(data) // передаю статью в стор после создания
      }) 
    } catch(error) {
      console.log(error)
    }
  },
  setSelectedPost: (item) => ({
    type: "SET_SELECTED_POST",
    payload: item,
  }),
  editArticle : (updatedPost) => async (dispatch) =>{
    try {
      await axios.put(`http://localhost:8000/articles/${updatedPost.id}`, updatedPost)
      .then(({ artilce }) => {
        dispatch(ArticlesActionCreators.fetchArticles(artilce));

      }) 
    } catch(error) {
      console.log(error)
    }
  },
  fetchArticles: () => async (dispatch) => {
    
    try {
        await axios.get(`http://localhost:8000/articles`)
        .then(({ data }) => {
          dispatch(ArticlesActionCreators.setArticles(data));
          // console.log(data) // передаю статьи в стор после их закгрузки с сервера
        }) 
      
    } catch (error) {
        console.log(error)
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
   setCurrentPage:(page) => ({
    type: "SET_CURRENT_PAGE",
    payload: page,
  })
  
};
