const express = require("express");
const app = express();
app.use(express.json());

app.listen(3080, () => {
    console.log("Servidor Rodando!")
})

<<<<<<< HEAD
let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "GTAV", studio: "Rockstar", price: 30},
    {title: "Helldivers", studio: "Arrowhead", price: 200},
    {title: "RDR2", studio: "Rockstar", price: 120},
    {title: "CS GO2", studio: "Valve", price: 0}
]

app.get("/", (req,res) =>{
    res.json(games);
})

=======
app.get("/games", (req,res) =>{
    res.json(games);
})

app.get('/games/:idgame', (req, res) => {
    const idgame = parseInt(req.params.idgame);
    let mensagemErro = '';
    let game1;

    if (!(isNaN(idgame))) {
        game = game1.find(u => u.id === idgame);
        if (!game1) {
            mensagemErro = 'Jogo não Encontrado';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});

>>>>>>> 3ff6dfe (.)
app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, price}
    games.push(newGame)
    res.send("OK");
});

app.put('/novogame/:index', (req, res) =>{
    const {index} = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title, studio, price};

    return res.json(games);
})

app.delete("/:index", (req, res) =>{
    const{index} = req.params;
    games.splice(index, 1);
    return res.json({message: "O jogo foi alterado"})
})