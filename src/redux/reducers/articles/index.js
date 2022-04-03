const initialState = {
  items: [],
  item: [],
  selectedPost: {},
  currentPage: 1,
  perPage: 9,
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        items: action.payload,

      };
    case "SET_ARTICLE":
      return {
        ...state,
        item: action.payload,
      };
    case "SET_SELECTED_POST":
      return {
        ...state,
        selectedPost: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
