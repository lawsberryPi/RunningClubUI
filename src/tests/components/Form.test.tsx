import { render, screen } from "@testing-library/react";
import Form from "../../component/form";
function testHandler() {
  console.log("do nothing");
}

test("renders learn react link", () => {
  render(
    <Form
      firstName={"testFirstName"}
      lastName={"testFirstName"}
      state={"testFirstName"}
      city={"testFirstName"}
      email={"testFirstName"}
      password={"testFirstName"}
      token={undefined}
      updateFields={testHandler}
      submitFields={testHandler}
    />
  );
  const linkElement = screen.getByText(/Last Name/i);
  expect(linkElement).toBeInTheDocument();
});
