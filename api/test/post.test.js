const app = require("../app");
const request = require("supertest");
let token;
beforeAll(async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({ username: "jo", email: "jo@gmail.com", password: "12" });
  token = res.body.accessToken;
});

describe("post endpoints", () => {
  test("should return status code 200 as user is logged in and can write post", async () => {
    const res = await request(app)
      .post("/api/posts")
      .set("accessToken", `${token}`)
      .send({ desc: "hello", username: "jo" });
    expect(res.status).toBe(200);
  });
  test("should return status code 200 when user updates posts", async () => {
    const res = await request(app)
      .put("/api/posts/1")
      .set("accessToken", `${token}`)
      .send({ desc: "hello1", username: "jo" });
    expect(res.status).toBe(200);
  });
});
