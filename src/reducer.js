export const initialState = {
  basket: [],
  user: null,
};

//Function to ADD and Remove items
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic to add item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //LOGIC to remove item from basket
      return { state };
    default:
      return state;
  }
};

export default reducer;
