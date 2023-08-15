import React, { useState } from "react";
import "./App.css";
import Form from "./component/form";
import { SignupFormData } from "./types/formTypes";
import { INITIAL_DATA } from "./contants";
import { useAxios } from "./services/axios";
import { tokenRequestOptions } from "./services/axiosOptions";
import { AuthToken } from "./types/apiTypes";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<SignupFormData>(INITIAL_DATA);
  const [, tokenData, ,] = useAxios<AuthToken>(tokenRequestOptions);

  function updateFields(fields: Partial<SignupFormData>) {
    setData((prev) => {
      const whatisit = { ...prev, ...fields }
      return whatisit;
    });
  }

  function handleSubmit() {
    alert(JSON.stringify(data));
    console.log(data);
  }

  return (
    <div className="App">
      <Form
        {...data}
        token={tokenData}
        updateFields={updateFields}
        submitFields={handleSubmit}
      />
    </div>
  );
};

export default App;
