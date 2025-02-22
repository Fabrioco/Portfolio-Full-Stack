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

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.findAll(); // Exemplo de consulta ao banco de dados
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar projetos" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
