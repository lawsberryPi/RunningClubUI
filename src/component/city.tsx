import { CityData } from "../types/apiTypes";
import { cityRequestOptions } from "../services/axiosOptions";
import { useAxios } from "../services/axios";
import { SignupFormData } from "../types/formTypes";
import { useRef } from "react";

export interface Props {
  token: string;
  state: string;
  city: string;
  updateFields: (fields: Partial<SignupFormData>) => void;
}

export const CitiesDrop: React.FC<Props> = ({
  token,
  state,
  city,
  updateFields,
}) => {
  const currentState = useRef("");
  const [loading, citiesData, error, request] = useAxios<CityData[]>(
    cityRequestOptions(token, state)
  );

  // of the selected state has changed, then fetch city again
  if (state !== currentState.current) {
    request(cityRequestOptions(token, state));
    currentState.current = state;
  }

  if (error) throw Error(`fetching city encountered error ${error}`);

  let handleCityChange = (value: string) => {
    updateFields({ city: value });
    console.log(value);
  };

  const loadingText = loading ? "loading..." : "-- Select a City --";
  return (
    <>
      <label>City</label>
      <select
        required
        value={city}
        onChange={(e) => handleCityChange(e.target.value)}
      >
        <option value="Select a city"> {loadingText} </option>
        {!!citiesData &&
          citiesData.map((city) => {
            return <option value={city.city_name}>{city.city_name}</option>;
          })}
      </select>
    </>
  );
};
