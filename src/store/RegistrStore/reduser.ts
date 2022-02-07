import { UserActionsType } from "./actions";
import { ActionsType, ReducerType } from "./types";

const initialState: ReducerType = {
  user: { lastName: "", firstName: "" },
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action: ActionsType): ReducerType => {
  switch (action.type) {
    case UserActionsType.userReistration:
      return {
        ...state,
        user: action.payload,
      };
    case UserActionsType.userLogout:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};

export default reducer;