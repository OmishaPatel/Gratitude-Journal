const app = require("../app");
const request = require("supertest");

beforeAll(async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({ username: "jo", email: "jo@gmail.com", password: "12" });
  token = res.body.accessToken;
});

describe("user endpoints", () => {
  test("should return status code 400 as user is logged in and can access info", async () => {
    const res = await request(app).get("/api/users/4");
    expect(res.status).toBe(200);
  });
  test("should return status code 200 when user updates name", async () => {
    const res = await request(app)
      .put("/api/users/4")
      .set("accessToken", `${token}`)
      .send({ username: "jo1", password: "12" });
    expect(res.status).toBe(200);
  });
});
