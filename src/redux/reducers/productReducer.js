import { ActionType } from "../contents/action-type";

const initialState = {
  product: [
    {
      id: 1,
      title: "Joxon",
      category: "programming",
    }
  ]
};

export const productReducer = (state = initialState, {type,payload}) => {
  switch(type) {
    case ActionType.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
