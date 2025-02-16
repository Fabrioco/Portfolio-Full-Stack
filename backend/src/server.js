const Express = require("express");
const cors = require("cors");
const routerProject = require("./routes/project");
const database = require("./config/database");

const app = Express();

const PORT = process.env.PORT || 5000;

app.use(Express.json());
app.use(cors());

app.use("/api/projects", routerProject);

database.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
  });
});
