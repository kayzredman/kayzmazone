export const initialState = {
  basket: [
    {
      id: "12154",
      title: "New Apple Ipad Pro",
      price: 598.99,
      rating: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/S/gladiator-image-upload-prod/6/A13V1IB3VIYZZH/bfa776d2a55c6e320dfe270f260ebf39._CR0,0,400,400_AC_SL180_QL70_.jpg",
    },
    {
      id: "121541",
      title:
        "Huawei Watch GT 2 Montre Connectée (GPS, boîtier 46 mm) avec Bracelet Sport Noir",
      price: 139.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/615hqoyfNBL._AC_SL1000_.jpg",
    },
    {
      id: "121578",
      title:
        "NOVOO USB C Hub Portable, 8-en-1 Adaptateur USB-C vers Type C 100W PD Port de Rechargement, 4K HDMI, 3 x USB 3.0, Lecteur de Carte SD & Micro SD, RJ45 1Gbps LAN, Multiprise Dock pour Macbook Pro Air",
      price: 41.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/41uctt7abtL.__AC_SY200_.jpg",
    },
  ],
  user: null,
};

// Create a Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

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

      //Clone the basket....
      let newBasket = [...state.basket];

      //check if product exist in basket...
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exist in basket, remove it....
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
