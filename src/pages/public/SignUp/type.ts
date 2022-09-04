export type UserDetailsState = {
  email: string;
  password: string;
  confirmationPassword: string;
  contactNumber: string;
};

export type ErrorsState = {
  [id: string]: string;
};
