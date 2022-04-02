const initialState = {
    items:[],
    item:[],
    selectedPost: {}
  };
  
  export default function articlesReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_ARTICLES":
        return {
          ...state,
          items: action.payload,
          isLoaded: true,
        };
        case "SET_ARTICLE":
        return {
          ...state,
          item: action.payload,
          isLoaded: true,
        };
        case "SET_SELECTED_POST":
        return {
          ...state,
          selectedPost: action.payload,
          isLoaded: true,
        };
      default:
        return state;
    }
  }
  