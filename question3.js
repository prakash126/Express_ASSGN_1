const express = require("express");

const app = express();

app.use(express.json());

app.post("/totalsalary", (req, res) => {
  const hra = req.body.hra;
  const basic = req.body.basic;
  const da = req.body.da;
  const it = req.body.it;
  const pf = req.body.pf;
  const totalsalary = basic + hra + da - (it + pf);
  res.send({ "Total Salary": totalsalary });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
