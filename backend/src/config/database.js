const { Sequelize } = require("sequelize");

const database = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necessário para conectar ao Render
    },
  },
});

database
  .authenticate()
  .then(() => console.log("Conectado ao banco de dados!"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

module.exports = database;
