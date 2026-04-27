const express = require("express");
const app = express();

app.use(express.json());

// teste de vida
app.get("/", (req, res) => {
  res.send("Bot Minecraft ativo");
});

// rota de comando (base do seu sistema TikTok)
app.post("/comando", (req, res) => {
  const msg = req.body.msg;

  if (!msg) {
    return res.status(400).send("sem comando");
  }

  if (msg === "zombie") {
    return res.send("spawn zombie");
  }

  if (msg === "rosa") {
    return res.send("spawn rose effect");
  }

  return res.send("comando desconhecido");
});

const port = process.env.PORT || 10000;

app.listen(port, () => {
  console.log("Bot rodando na porta " + port);
});
