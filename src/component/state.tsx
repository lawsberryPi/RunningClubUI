import { useState } from "react";
import { AuthToken, StateData } from "../types/apiTypes";
import { stateRequestOptions } from "../services/axiosOptions";
import { useAxios } from "../services/axios";
import { CitiesDrop } from "./city";
import { SignupFormData } from "../types/formTypes";

export interface Props {
  token: AuthToken;
  state: string;
  city: string;
  updateFields: (fields: Partial<SignupFormData>) => void;
}

export const StatesDrop: React.FC<Props> = ({
  token,
  state,
  city,
  updateFields,
}) => {
  const [loading, stateData, error] = useAxios<StateData[]>(
    stateRequestOptions(token.auth_token)
  );

  const [selectedState, setSelectedState] = useState<string>("");
  const loadingText = loading ? "loading..." : "-- Select a State --";
  if (error) throw Error(`fetching state encountered error ${error}`);

  let handleStateChange = (value: string) => {
    updateFields({ state: value });
    setSelectedState(value);
  };

  return (
    <>
      <label>State</label>
      <select
        required
        value={state}
        onChange={(e) => handleStateChange(e.target.value)}
      >
        <option value="Select a state"> {loadingText} </option>
        {!!stateData &&
          stateData.map((state) => {
            return <option value={state.state_name}>{state.state_name}</option>;
          })}
      </select>
      {!!selectedState && (
        <CitiesDrop
          token={token.auth_token}
          state={selectedState}
          city={city}
          updateFields={updateFields}
        />
      )}
    </>
  );
};
