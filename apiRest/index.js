import express from 'express';
<<<<<<< HEAD
import { buscarUfPorId, buscarUfs, buscarUfsPorNome } from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ?buscarUfsPorNome(nomeUf):buscarUfs();
    if (resultado.length > 0){
=======
import colecaoUf from './dados.js';

import colecaoUF from './dados.js';

const app = express();

const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;

    if (resultado.length > 0) {
>>>>>>> 3ff6dfe (.)
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada" })
    }
});

app.get('/ufs/:iduf', (req, res) => {
<<<<<<< HEAD
    const uf = buscarUfPorId(req.params.iduf);
    if (uf) {
        res.json(uf);
    } else if(isNaN(parseInt(req.params.iduf))){
        res.status(404).send({"erro": "Requisição Inválida"});
    } else {
        res.status(404).send({"erro": "UF não encontrada"});
=======
    const iduf = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!(isNaN(iduf))) {
        uf = colecaoUF.find(u => u.id === iduf);
        if (!uf) {
            mensagemErro = 'UF não Encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).send({ "erro": mensagemErro });
>>>>>>> 3ff6dfe (.)
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
});