import express from 'express';
import listaDeJogos from './listaGames.js';

const app = express();
app.use(express.json()); // Para poder ler JSON no corpo das requisições

const buscarGame = (games) => {
    return listaDeJogos.filter(game => game.title.toLowerCase().includes(games.toLowerCase()));
}

app.get("/games", (req, res) => {
    const games = req.query.busca;
    const resultado = games ? buscarGame(games) : listaDeJogos;
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhum jogo encontrado" });
    }
});

app.get("/games/:nome", (req, res) => {
    const nome = req.params.nome;
    let mensagemErro = '';
    let game;

    if (!isNaN(nome)) {
        game = listaDeJogos.find(u => u.title === nome);
        if (!game) {
            mensagemErro = 'Jogo não encontrado';
        }
    } else {
        mensagemErro = 'Requisição Inválida';
    }

    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});

app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title, studio, price };
    listaDeJogos.push(newGame);
    res.send("OK");
});

app.put('/novogame/:index', (req, res) => {
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    listaDeJogos[index] = { title, studio, price };

    return res.json(listaDeJogos);
});

app.delete("/:index", (req, res) => {
    const { index } = req.params;
    listaDeJogos.splice(index, 1);
    return res.json({ message: "O jogo foi removido" });
});

app.listen(3080, () => {
    console.log("Servidor Rodando!");
});
