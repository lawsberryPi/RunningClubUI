import { validateEmail } from "../../utils/validateEmail";

test("email should be valid", async () => {
    const validEmail = "shawn.luo@mapbox.com"
    const result = validateEmail(validEmail);
    expect(result).toBe(true);
});

test("email should not be valid", async () => {
    const inValidEmail = "shawn.luo@mapbox"
    const result = validateEmail(inValidEmail);
    expect(result).toBe(false);
});