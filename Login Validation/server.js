const express = require("express");
const app = express();
const { Firestore } = require("@google-cloud/firestore");
module.exports = app;

const cors = require("cors");

//CORS
app.use(
  cors({
    origin: `https://frontend-container-6j5ciz4cca-uc.a.run.app`,
  })
);

//Firestore instance created.
const firestore = new Firestore();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Validate Endpoint
app.post(`/validate`, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    //Validation for Null Credentials.
    if (!email || !password) {
      res.status(404).send({ Error: "User Null" });
    }

    //Getting data from Reg collection documents.
    const regRef = firestore.collection("Reg").doc(email);
    const doc = await regRef.get();
    let isLoggedIn = false;

    //Validation for already exsting user.
    if (!doc.exists) {
      res.status(404).send({ Error: "User Not Found" });

      //Veryfying Credentials
    } else if (email === doc.data().email && password === doc.data().password) {
      isLoggedIn = true;
    } else {
      res.status(200).send({ Error: "Credential not matched" });
    }

    //Updating state for user to Online.
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
