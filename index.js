const express = require("express");
const conectarDBDeseo = require("./config/db");
const cors = require("cors");

const app = express();
conectarDBDeseo();
app.use(cors());
app.use(express.json());
app.use("/api/deseos", require("./routes/deseo"));

app.listen(4001, () => {
  console.log("servidor Deseos");
});
