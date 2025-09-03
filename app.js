import express from "express";
const app = express();
export default app;
app.use(express.json());

import employees from "./api/employees.js";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employees);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
