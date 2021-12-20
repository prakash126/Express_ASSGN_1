const express = require("express");

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const uid = req.body.username;
  const pwd = req.body.password;
  resp = "Invalid User";
  if (uid == "prakash" && pwd == "admin") {
    resp = "valid user";
  }
  res.send(resp);
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
