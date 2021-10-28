const app = require("../app");
const request = require("supertest");

//auth
describe("auth group", () => {
  test("should return status code 200 when successfully created", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ username: "jo", email: "jo@gmail.com", password: "12" });
    expect(res.status).toBe(200);
  });
  test("should handle exceptions", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ username: "", email: "", password: "" });
    expect(res.status).toBe(500);
  });
  test("should return status code 200 when successfully loggedin", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "jo", email: "jo@gmail.com", password: "12" });
    expect(res.status).toBe(200);
  });
  test("should return invalid username/password", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "david", email: "john@gmail.com", password: "1234" });
    expect(res.status).toBe(400);
  });
});
