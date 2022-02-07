import { UserActionsType } from "./actions";

export type ReducerType = {
  user: UserType;
};

export type UserType = {
  lastName: string;
  firstName: string;
};

type userRegistrationActionType = {
  type: UserActionsType.userReistration;
  payload: UserType;
};

type userLogoutActionType = {
  type: UserActionsType.userLogout;
};

export type ActionsType = userRegistrationActionType | userLogoutActionType;