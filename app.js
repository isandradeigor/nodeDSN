const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Navegue entre as paginas!</h1>');
});

app.get("/pagina1", (req, res) => {
    res.send('<h1>Primeira Pagina!</h1>');
});

app.get("/pagina2", (req, res) => {
    res.send('<h1>Segunda Pagina!</h1>');
});

app.get("/pagina3", (req, res) => {
    res.send('<h1>Terceira Pagina!</h1>');
});

app.get("/pagina4", (req, res) => {
    res.send('<h1>Americo!</h1>');
});

app.get("/pagina5", (req, res) => {
    res.send('<h1>Andrade!</h1>');
});

app.listen(3000, () => {
    console.log("Servidor rodando na http://localhost:3000");
});
