//Employee data
const empData = [
  {
    Id: 1,
    name: "Prakash",
    dept: "QA",
    designation: "consultant",
  },
  {
    Id: 2,
    name: "Raja",
    dept: "BA",
    designation: "consultant",
  },
];
const express = require("express");
const app = express();
app.use(express.json());
//Get All Employee
app.get("/getempdata", (req, res) => {
  res.send(empData);
});

//Get Employee by ID
app.get("/getempdata/:id", (req, res) => {
  const id = req.params.id;
  let searchemployee = {};
  empData.forEach((elem) => {
    if (elem.Id == id) {
      searchemployee = elem;
    }
  });
  res.send(searchemployee);
});

//Get Employee by name
app.get("/getempdatabyname/:name", (req, res) => {
  const name = req.params.name;
  //console.log(name);
  let searchemployee = {};
  empData.forEach((elem) => {
    if (elem.name == name) {
      searchemployee = elem;
    }
  });
  res.send(searchemployee);
});

//Insert Employee
app.post("/addemp", (req, res) => {
  const object = {
    Id: req.body.id,
    name: req.body.name,
    dept: req.body.dept,
    designation: req.body.designation,
  };
  empData.push(object);
  res.send("Inserted Sucessfully");
});

//Update Employee
app.put("/getempdata/:id", (req, res) => {
  const id = req.params.id;
  const searchemployee = {};
  const flag = -1;
  const responsestring = "";
  for (const i = 0; i < empData.length; i++) {
    if (empData[i].Id == id) {
      flag = i;
      searchemployee = empData[i];
    }
  }
  if (flag !== -1) {
    updated_object = {
      Id: req.body.Id == undefined ? searchemployee.Id : req.body.Id,
      name: req.body.name == undefined ? searchemployee.name : req.body.name,
      dept: req.body.dept == undefined ? searchemployee.dept : req.body.dept,
      designation:
        req.body.designation == undefined
          ? searchemployee.designation
          : req.body.designation,
    };
    empData[flag] = updated_object;
    responsestring = "Updated Sucessfully";
  } else {
    responsestring = "Invalid Id";
  }
  res.send(responsestring);
});

//Delete Employee
app.delete("/deleteemp/:id", (req, res) => {
  const id = req.params.id;
  let index = -1;
  let responsestring = "";
  for (let i = 0; i < empData.length; i++) {
    if (empData[i].Id == id) {
      index = i;
    }
  }
  if (index == -1) {
    responsestring = "No record Found";
  } else {
    empData.splice(index, 1);
    responsestring = "Deleted Sucessfully";
  }
  res.send(responsestring);
});

app.listen(3000, () => {
  console.log("Server Started at 3000");
});
