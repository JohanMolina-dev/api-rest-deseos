const express = require("express");
const conectarDBDeseo = require("./config/db");
const cors = require("cors");

const app = express();
conectarDBDeseo();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api/deseos", require("./routes/deseo"));

app.listen(port, () => {
  console.log("servidor Usuarios SERVER ON PORT ${app.get('port')]");
});
