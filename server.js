const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot Minecraft ativo");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Bot rodando na porta " + port);
});
