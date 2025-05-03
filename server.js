import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import icontype from "./src/app/controllers/icontype.routes.js";
import user from "./src/app/controllers/user.routes.js";
import workflow from "./src/app/controllers/workflow.routes.js";
import workflowtype from "./src/app/controllers/workflowtype.routes.js";


dotenv.config();

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// api routes
app.use("/", icontype);
app.use("/", user);
app.use("/", workflow);
app.use("/", workflowtype);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});