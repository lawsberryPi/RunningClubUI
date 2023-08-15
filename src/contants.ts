import { SignupFormData } from "./types/formTypes";

export const INITIAL_DATA: SignupFormData = {
    firstName: "",
    lastName: "",
    state: "",
    city: "",
    email: "",
    password: ""
}

const ADMIN_EMAIL = "shawn-yu@huskers.unl.edu";
const TOKEN_URL = "https://www.universal-tutorial.com/api/getaccesstoken";
const STATE_URL = "https://www.universal-tutorial.com/api/states/United States";
const CITY_URL = "https://www.universal-tutorial.com/api/cities/";
const API_TOKEN = "kFKf3JIkOqFqTQkNjxfRxYloy7arufvxlFV5Fhm82oRCk4Nty3lPbpRCiCyzTfnhM60";

const EMAIL_REGEX = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );

export {ADMIN_EMAIL, TOKEN_URL, STATE_URL, CITY_URL, API_TOKEN, EMAIL_REGEX}