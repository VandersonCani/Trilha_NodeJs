import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('html', (path, options, callback) => {
    ejs.renderFile(path, options, callback);
});

app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar Pão'];

app.get('/', (req, res) => {
    res.render('index', {taskList: tasks});
});

app.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000');
});
