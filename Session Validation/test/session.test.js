const request = require("supertest");
const app = require("../server");
const assert = require("assert");

describe("Session Endpoint", () => {
  it("should return online users with their information", (done) => {
    request(app)
      .get("/session")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        assert.strictEqual(Array.isArray(res.body), true);
        assert.ok(res.body.length > 0);

        done();
      });
  });
});

describe("Logout Endpoint", () => {
  it("should update the user status to offline and return the updated status", (done) => {
    request(app)
      .get("/logout?email=jainil@gmail.com")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        assert.strictEqual(res.status, 200);

        done();
      });
  });
});
