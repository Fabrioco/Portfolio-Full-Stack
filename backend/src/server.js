const Express = require("express");
const cors = require("cors");
const routerProject = require("./routes/project");
const database = require("./config/database");

const app = Express();

const PORT = process.env.PORT || 5000;

app.use(Express.json({ limit: "10mb" }));
const allowedOrigins = [
  "https://portfolio-full-stack-yj8l-by9arfk5v.vercel.app",
  "https://portfolio-full-stack-yj8l.vercel.app",
  "http://localhost:3000",];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "A política de CORS para este site não permite acesso a partir da origem especificada.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use("/api/projects", routerProject);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
