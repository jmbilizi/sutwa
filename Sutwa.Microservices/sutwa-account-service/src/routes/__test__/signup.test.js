import request from "supertest";
import app from "../../app";
import { connect, close, clear } from "../../dbTestSetup";
const agent = request.agent(app.default);

// Setup connection to the database
beforeAll(async () => await connect());
beforeEach(async () => await clear());
afterAll(async () => await close());

describe("POST /api/users/signup", () => {
  //signin validation test
  it("Should return 422 if not a valid email is provided!", async () => {
    await agent
      .post("/api/users/signup")
      .send({ email: "test", password: "password", name: "Sutwa" })
      .expect(422);
  });

  it("Should return 422 if not a valid name is provided!", async () => {
    await agent
      .post("/api/users/signup")
      .send({ email: "test@test.com", password: "password", name: "S" })
      .expect(422);
  });

  it("Should return 422 if password length is less than 6 characters or password is not provided at all!", async () => {
    await agent
      .post("/api/users/signup")
      .send({ email: "test@test.com", password: "12345", name: "Sutwa" })
      .expect(422);
  });

  it("Should return 422 if email is not provided!", async () => {
    await agent
      .post("/api/users/signup")
      .send({ password: "password", name: "Sutwa" })
      .expect(422);
  });

  it("Should return 422 if password is not provided!", async () => {
    await agent
      .post("/api/users/signup")
      .send({ email: "test@test.com", name: "Sutwa" })
      .expect(422);
  });

  it("Should return 422 if name is not provided!", async () => {
    await agent
      .post("/api/users/signup")
      .send({ email: "test@test.com", password: "password" })
      .expect(422);
  });
});
