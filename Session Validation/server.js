const express = require("express");
const app = express();
const { Firestore } = require("@google-cloud/firestore");
module.exports = app;

const cors = require("cors");

app.use(
  cors({
    origin: `https://frontend-container-6j5ciz4cca-uc.a.run.app`,
  })
);

const firestore = new Firestore();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Session endpoint.
app.get(`/session`, async (req, res) => {
  const stateRef = firestore.collection("state");

  const allOnlineUsers = await stateRef.where("status", "==", "Online").get();
  let userArray = [];
  let response = [];

  //Fetching all the users State is ONLINE from state collection.
  allOnlineUsers.forEach(async (doc) => {
    const userObj = {
      email: doc.id,
      status: doc.data().status,
      timestamp: doc.data().timestamp,
    };
    userArray.push(userObj);
  });

  //Fetching data of user stored in array above(ONLINE Users)
  for (i = 0; i < userArray.length; i++) {
    const userInfoDoc = firestore.collection("Reg").doc(userArray[i].email);
    const document = await userInfoDoc.get();
    const userName = document.data().name;
    const userLocation = document.data().location;
    response.push({
      name: userName,
      location: userLocation,
      email: userArray[i].email,
      status: userArray[i].status,
      timestamp: userArray[i].timestamp,
    });
  }

  res.status(200).json(response);
});

//Logout Endpoint.
app.get(`/logout`, async (req, res) => {
  try {
    const status = {
      status: "Offline",
      timestamp: new Date(),
    };
    const email = req.query.email;
    const stateRef = firestore.collection("state").doc(email);
    const doc = await stateRef.set(status);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
