export type signUpPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type signUpResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  message?: string;
};

export type signInPayload = {
  email: string;
  password: string;
};

export type signInResponse = {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  accessToken: string;
  refreshToken: string;
  message?: string;
};
