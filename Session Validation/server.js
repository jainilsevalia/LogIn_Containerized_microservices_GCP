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

app.get(`/session`, async (req, res) => {
  const stateRef = firestore.collection("state");

  const allOnlineUsers = await stateRef.where("status", "==", "Online").get();
  let userArray = [];
  let response = [];

  allOnlineUsers.forEach(async (doc) => {
    const userObj = {
      email: doc.id,
      status: doc.data().status,
      timestamp: doc.data().timestamp,
    };
    userArray.push(userObj);
  });

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

app.get(`/logout`, async (req, res) => {
  try {
    const status = {
      status: "Offline",
      timestamp: new Date(),
    };
    const email = req.query.email;
    const stateRef = firestore.collection("state").doc(email);
    const doc = await stateRef.set(status);
    res.status(200).json({ ...status });
  } catch (e) {
    console.log(e);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
