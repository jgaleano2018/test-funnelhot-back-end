module.exports = {
    HOST: "localhost",
    PORT: "4306",
    USER: "root",
    PASSWORD: "",
    DB: "bdfunnelhot",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
