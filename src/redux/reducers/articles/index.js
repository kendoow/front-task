const initialState = {
    items:[],
    item:[]
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
      case "SET_LOADED":
        return {
          ...state,
          isLoaded: action.payload,
        };
      default:
        return state;
    }
  }
  