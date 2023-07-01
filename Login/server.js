const express = require("express");
const app = express();
const { Firestore } = require("@google-cloud/firestore");
const cors = require("cors");
module.exports = app;

app.use(
  cors({
    origin: `https://frontend-container-6j5ciz4cca-uc.a.run.app`,
  })
);

const firestore = new Firestore();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post(`/Register`, async (req, res) => {
  try {
    const email = req.body.email;
    if (email == "") {
      return res.status(400).json("Email is required.");
    }

    if (!email.includes("@")) {
      return res.status(400).json("Invalid Email Address.");
    }
    const userInfo = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    };

    const RegRef = firestore.collection("Reg").doc(`${email}`);

    const regSnapshot = await RegRef.get();

    if (regSnapshot.exists) {
      return res.status(409).json("Email already registered.");
    }
    const document = firestore.doc(`Reg/${email}`);
    const response = document.set(userInfo);
    return res.status(201).json(userInfo);
  } catch (e) {
    return res.send(e);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
