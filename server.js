require("./connections/connection.mongo")();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5006;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "successfull",
    payload: {
      project: "application template",
      version: "1.0",
      studyCenter: "@lexingtonhub",
    },
    message: "thank you lexington",
  });
});
const basicroute = require("./routes/route.basic")();
app.use("/api/v1/basic", basicroute);
app.listen(port, () => console.log(`Example app listening on port port!`));
