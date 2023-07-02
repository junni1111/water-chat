export type SignUpType = keyof SignUpInputType;

export type SignUpInputType = {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
};

export type SignUpValidateType = {
  email: validType;
  name: validType;
  password: validType;
  phoneNumber: validType;
};

export type validType = {
  isValid: boolean;
  message: string;
};

export type SignInInputType = {
  email: string;
  password: string;
};

export type RefreshType = {
  accessToken: string;
};
