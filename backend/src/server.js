const Express = require("express");
const cors = require("cors");
const routerProject = require("./routes/project");
const database = require("./config/database");

const app = Express();

const PORT = process.env.PORT || 5000;

app.use(Express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "https://portfolio-full-stack-yj8l.vercel.app/dashboard",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/projects", routerProject);

database.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
  });
});
