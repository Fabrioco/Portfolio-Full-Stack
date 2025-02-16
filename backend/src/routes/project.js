const Express = require("express");
const routerProject = Express.Router();
const Project = require("../model/projects");

routerProject.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    console.log(error);
  }
});

routerProject.post("/", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routerProject;
