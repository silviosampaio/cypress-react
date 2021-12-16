const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  try {
    const { email } = req.body;

    if (email === "cadastrado@teste.com") {
      throw new Error("Usuário já cadastrado");
    }

    res.status(200).json({
      error: false,
      user: {
        //_id: new Date().getTime(),
        ...req.body,
      },
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== "cadastrado@teste.com") {
      throw new Error("Usuário não existe");
    }

    if (password !== "123") {
      throw new Error("Senha não confere");
    }

    res.status(200).json({
      error: false,
      user: {
        _id: new Date().getTime(),
      },
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
