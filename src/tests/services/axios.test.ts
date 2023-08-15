import { rest } from "msw";
import { setupServer } from "msw/node";
import { tokenRequestOptions } from "../../services/axiosOptions";
import { AuthToken } from "../../types/apiTypes";
import { useAxios } from "../../services/axios";

const server = setupServer(
  rest.get(`${tokenRequestOptions.baseURL}`, (req, res, ctx) => {
    return res(ctx.json({ auth_token: "test_token" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should equal to test token", async () => {
  const [, tokenData, ,] = useAxios<AuthToken>(tokenRequestOptions);
  console.log(tokenData?.auth_token);
  expect(tokenData?.auth_token).toBe("test_token");
});
