import Express from 'Express';

const app = Express();

var carros = ['gol', 'strada', 'onix', 'cruze', 'tiida', 'polo'];

app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) => 
res.send("<h3>Rotas no Express</h3><p>Rota'/'")
);

app.get('/sobre', (req, res) => 
res.send("<h3>Rotas no Express</h3><p>Sobre'/'")
);

app.get('/users/:name', (req, res) =>
res.send('Usuário:' + req.params.name)
); 

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros[(carros.length - 1)]]);
});

app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});

app.get('/cars/:id', (req,res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null;
    return res.json(carros[id]); 
});
/* --------------------------*/

var preco =  ['35000', '75000', '56000', '85000', '43000', '92000'];

app.post('/preco/', (req, res) => {
    let valor = req.body.valor;
    preco[(preco.length)] = valor;
    return res.json([preco[(preco.length - 1)]]);
});

app.put('/preco/update/:id', (req, res) => {
    let valor = req.body.valor;
    preco[req.params.id] = valor;
    return res.json(preco[req.params.id]);
});

app.get('/preco/:id', (req,res) => {
    let id = req.params.id;
    return res.json([preco[id]])
});

app.delete('/preco/delete/:id', (req, res) => {
    let id = req.params.id;
    preco[id] = null;
    return res.json(preco[id]); 
});

app.listen(3000, () =>
console.log('Servidor iniciado na porta 3000')
);