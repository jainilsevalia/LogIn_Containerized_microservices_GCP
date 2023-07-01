const request = require("supertest");
const app = require("../server");
const assert = require("assert");

describe("Registration Endpoint", () => {
  it("should register a user successfully", (done) => {
    request(app)
      .post("/Register")
      .send({
        name: "Jainil Sevalia",
        password: "jainil@123",
        email: "jainil@gmail.com",
        location: "Halifax",
      })
      .expect(201)
      .end((err, res) => {
        assert.deepStrictEqual(res.body, {
          name: "Jainil Sevalia",
          password: "jainil@123",
          email: "jainil@gmail.com",
          location: "Halifax",
        });
        done();
      });
  });

  it("should return an error for invalid request", (done) => {
    request(app)
      .post("/Register")
      .send({
        name: "Jainil Sevalia",
        password: "jainil@123",
        email: "",
        location: "Halifax",
      })
      .expect(400)
      .end((err, res) => {
        assert.strictEqual(res.body, "Email is required.");
        done();
      });
  });

  it("should return an error for invalid email", (done) => {
    request(app)
      .post("/Register")
      .send({
        name: "Jainil Sevalia",
        password: "jainil@123",
        email: "Jainilgmail.com",
        location: "Halifax",
      })
      .expect(400)
      .end((err, res) => {
        assert.strictEqual(res.body, "Invalid Email Address.");
        done();
      });
  });

  it("should return an error for already registered email", (done) => {
    request(app)
      .post("/Register")
      .send({
        name: "Jainil Sevalia",
        password: "jainil@123",
        email: "jainil@gmail.com",
        location: "Halifax",
      })
      .expect(409)
      .end((err, res) => {
        assert.strictEqual(res.body, "Email already registered.");
        done();
      });
  });
});
