const request = require("supertest");
const app = require("../server");
const assert = require("assert");

describe("Validation Endpoint", () => {
  it("should validate user credentials and return user data with status", (done) => {
    request(app)
      .post("/validate")
      .send({
        email: "jainil@gmail.com",
        password: "jainil@123",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        assert.strictEqual(res.body.email, "jainil@gmail.com");
        assert.strictEqual(res.body.status, "Online");
        assert.strictEqual(typeof res.body.timestamp, "string");

        done();
      });
  });

  it("should return an error for missing user credentials", (done) => {
    request(app)
      .post("/validate")
      .send({})
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);

        assert.deepStrictEqual(res.body, {
          Error: "User Null",
        });

        done();
      });
  });

  it("should return an error for incorrect credentials", (done) => {
    request(app)
      .post("/validate")
      .send({
        email: "jainil@gmail.com",
        password: "wrongpassword",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        assert.deepStrictEqual(res.body, {
          Error: "Credential not matched",
        });

        done();
      });
  });

  it("should return an error for a non-existing user", (done) => {
    request(app)
      .post("/validate")
      .send({
        email: "nonexisting@example.com",
        password: "jainil@123",
      })
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);

        assert.deepStrictEqual(res.body, {
          Error: "User Not Found",
        });

        done();
      });
  });
});
