import React from "react";
import { FormProps } from "../types/formTypes";
import { FormWrapper } from "./formWrapper";
import { StatesDrop } from "./state";
import { EmailInput } from "./email";
import { validateEmail } from "../utils/validateEmail";

/**
 *
 * @param onSubmit submit handler for submitting the form
 * @returns
 */
function Form({
  firstName,
  lastName,
  state,
  city,
  email,
  password,
  token,
  updateFields,
  submitFields,
}: FormProps) {
  return (
    <form>
      <FormWrapper title="User Details">
        <label>First Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
        {!!token && (
          <StatesDrop
            token={token}
            state={state}
            city={city}
            updateFields={updateFields}
          />
        )}
        <EmailInput email={email} updateFields={updateFields} />
        <label>Password</label>
        <input
          required
          min={1}
          type="password"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
        />
        <button
          type="submit"
          onClick={submitFields}
          disabled={
            !(
              !!firstName &&
              !!lastName &&
              !!state &&
              !!city &&
              validateEmail(email) &&
              !!password
            )
          }
        >
          Submit
        </button>
      </FormWrapper>
    </form>
  );
}

export default Form;
