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

app.post(`/validate`, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (!email || !password) {
      res.status(404).send({ Error: "User Null" });
    }

    const regRef = firestore.collection("Reg").doc(email);
    const doc = await regRef.get();
    let isLoggedIn = false;

    if (!doc.exists) {
      res.status(404).send({ Error: "User Not Found" });
    } else if (email === doc.data().email && password === doc.data().password) {
      isLoggedIn = true;
    } else {
      res.status(200).send({ Error: "Credential not matched" });
    }

    if (isLoggedIn) {
      const status = {
        status: "Online",
        timestamp: new Date(),
      };
      const document = firestore.doc(`state/${email}`);
      const response = await document.set(status);
      res.status(200).json({ ...doc.data(), ...status });
    }
  } catch (e) {
    console.log(e);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
