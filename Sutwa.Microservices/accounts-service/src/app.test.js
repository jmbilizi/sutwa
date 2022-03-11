const request = require("supertest");
const app = require("./app");

// Pass supertest agent for each test
const agent = request.agent(app);

describe("POST/GET/PUT/DELETE *", () => {
  it("Should return 200 status", async () => {
    await agent.get("/").expect(200);
  });

  //not existing routes
  it("Should return 404 on any not existing routes!", async () => {
    await agent.post("/notexistingroute").send({ name: "jjj" }).expect(404);
  });

  it("Should return 404 on any not existing routes!", async () => {
    await agent.get("/notexistingroute").expect(404);
  });

  it("Should return 404 on any not existing routes!", async () => {
    await agent.put("/notexistingroute").send({ name: "name" }).expect(404);
  });

  it("Should return 404 on any not existing routes!", async () => {
    await agent.delete("/notexistingroute").expect(404);
  });
});
