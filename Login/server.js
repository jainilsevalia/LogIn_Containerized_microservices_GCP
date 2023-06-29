const express = require("express");
const app = express();
const { Firestore } = require("@google-cloud/firestore");
const cors = require("cors");

app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);

const firestore = new Firestore();

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
    const document = firestore.doc(`Reg/${email}`);
    const response = document.set(userInfo);
    res.status(201).json(userInfo);
  } catch (e) {
    res.send(e);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
