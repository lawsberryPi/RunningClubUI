import React, { useState } from "react";
import { validateEmail } from "../utils/validateEmail";
import { SignupFormData } from "../types/formTypes";
export interface Props {
  email: string;
  updateFields: (fields: Partial<SignupFormData>) => void;
}

export const EmailInput: React.FC<Props> = ({ email, updateFields }) => {
  const [message, setMessage] = useState("");
  const handleEmailOnChange = (email: string) => {
    updateFields({ email: email });
    if (!validateEmail(email)) {
      setMessage("Please, enter valid Email!");
    } else {
      setMessage("");
    }
  };

  return (
    <>
      <label>Email</label>
      <input
        required
        value={email}
        type="text"
        id="userEmail"
        onChange={(e) => handleEmailOnChange(e.target.value)}
      ></input>
      {!!message && (
        <>
          <br />
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {message}
          </span>
        </>
      )}
    </>
  );
};
