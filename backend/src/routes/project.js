const Express = require("express");
const routerProject = Express.Router();
const Project = require("../model/projects");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

routerProject.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll();

    // Corrigir para garantir que o prefixo seja único
    const projectsWithImage = projects.map((project) => {
      let imageBase64 = project.image.toString("base64"); // Converte o Buffer para Base64

      // Se a imagem já tem o prefixo correto, mantemos, caso contrário, adicionamos o prefixo
      if (!imageBase64.startsWith("data:image/png;base64,")) {
        imageBase64 = `data:image/png;base64,${imageBase64}`;
      }

      return {
        ...project.dataValues,
        image: imageBase64, // Aqui a imagem será retornada corretamente com o prefixo único
      };
    });

    res.json(projectsWithImage);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao buscar projetos");
  }
});

routerProject.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, category, time_worked, image, link } = req.body;

    // Converte a imagem de base64 para buffer
    const imageBuffer = Buffer.from(image, "base64");

    const project = await Project.create({
      title,
      category,
      time_worked,
      image: imageBuffer,
      link,
    });

    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro ao criar projeto");
  }
});

module.exports = routerProject;
