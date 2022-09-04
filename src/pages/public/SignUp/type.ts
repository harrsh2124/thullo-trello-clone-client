export type UserDetailsState = {
  email: string;
  password: string;
  confirmationPassword: string;
};

export type ErrorsState = {
  [id: string]: string;
};
