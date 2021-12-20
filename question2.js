const student = [
  {
    Id: 1,
    name: "Gyan",
    dept: "ECE",
    designation: "student",
  },
  {
    Id: 2,
    name: "Prakash",
    dept: "CSE",
    designation: "employee",
  },
  {
    Id: 3,
    name: "Aryan",
    dept: "CIVIL",
    designation: "account",
  },
];
const express = require("express");
const app = express();
app.use(express.json());
app.get("/getStudentData", (req, res) => {
  res.send({ student: student });
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
