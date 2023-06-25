const express = require("express");
const app = express();

const admin = require("firebase-admin");

const credentials = require("./Login_microservice_key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post(`/Register`, async (req, res) => {
  try {
    const email = req.body.email;
    const userInfo = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    };
    const response = await db.collection("Reg").doc(email).set(userInfo);
    res.send(response);
  } catch (e) {
    res.send(e);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
