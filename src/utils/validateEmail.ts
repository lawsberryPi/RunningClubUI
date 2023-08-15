import { EMAIL_REGEX } from "../contants";

/**
 * valid email if it has the correct format
 * @param email email that needs to be validated
 * @returns true/false depends on the validation of email
 */
export function validateEmail(email: string): boolean {
  const isValidEmail = EMAIL_REGEX.test(email);
  return isValidEmail;
}
