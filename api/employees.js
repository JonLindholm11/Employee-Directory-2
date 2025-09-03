import express from "express";
const router = express.Router();
export default router;

import employees from "#db/employees";

router.route("/").get((req, res) => {
    if (employees.length > 0){
        return res.send(employees);
    }else {
        return res.status(400).send("cannot fetch employees")
    }
});

router.route("/").post(( req, res, next) => {
    const { name } = req.body || {};
    if (name && name.length > 0 ){
        const lastEmployee = employees[employees.length - 1];
        let id = lastEmployee.id;
        id++
        const obj = {
            id,
            name,
        };
        employees.push(obj);
        return res.status(201).send(obj);
    } else {
        return res.status(400).send("please include a name")
    }
  });

router.route("/random").get((req, res) => {
    if(isNaN) {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return res.send(employees[randomIndex]);
    } else {
        return res.status(400).send("random number error")
    }
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;

  const employee = employees.find(temp => temp.id == id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  } if (id > employees.length) {
    return res.status(400).send("employee id not found")
  }
  return res.send(employee);
});
