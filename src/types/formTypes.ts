import { AuthToken } from "./apiTypes";

export interface SignupFormData {
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  email: string;
  password: string;
}

export type FormProps = SignupFormData & {
  token: AuthToken | undefined;
  updateFields: (fields: Partial<SignupFormData>) => void;
  submitFields: () => void;
};
