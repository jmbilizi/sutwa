import request from "supertest";
import app from "../../app";
import { connect, close, clear } from "../../dbTestSetup";
const agent = request.agent(app.default);

// Setup connection to the database
beforeAll(async () => await connect());
// beforeEach(async () => await clear());
afterAll(async () => await close());

describe("POST /api/users/signin", () => {
  //signin validation test
  it("Should return 422 if not a valid email is provided!", async () => {
    await agent
      .post("/api/users/signin")
      .send({ email: "test", password: "password" })
      .expect(422);

    await agent
      .post("/api/users/signin")
      .send({ email: "janvier", password: "password" })
      .expect(422);
  });

  it("Should return 422 if email is not provided!", async () => {
    await agent
      .post("/api/users/signin")
      .send({ password: "password" })
      .expect(422);
  });

  it("Should return 422 if password is not provided!", async () => {
    await agent
      .post("/api/users/signin")
      .send({ email: "test@test.com" })
      .expect(422);
  });

  it("Should return 422 if password length is less than 6 characters or password is not provided at all!", async () => {
    await agent
      .post("/api/users/signin")
      .send({ email: "test@test.com", password: "12345" })
      .expect(422);
  });

  //After validation
  it("Should return 400 if the user with this email does not exist in the database", async () => {
    await agent
      .post("/api/users/signin")
      .send({ email: "test@test.com", password: "password" })
      .expect(400);
  });
});
