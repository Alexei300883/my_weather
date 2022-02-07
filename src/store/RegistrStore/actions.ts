/* eslint-disable no-unused-vars */
import { UserType } from "./types";

export enum UserActionsType {
  userReistration = "USER_REGISTRATION",
  userLogout = "USER_LOGOUT",
}

export const userRegistrationAction = (user: UserType) => {
  const editUser = {
    lastName: user.lastName.toLocaleLowerCase(),
    firstName: user.firstName.toLocaleLowerCase(),
  };
  return {
    type: UserActionsType.userReistration,
    payload: editUser,
  };
};

export const userLogoutAction = () => {
  return {
    type: UserActionsType.userLogout,
  };
};