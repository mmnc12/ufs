import express from 'express';
import { buscaTodos, buscaPorId, buscaUfPorNome } from './servicos/servicos.js';

const app = express();

app.get('/ufs', (req, res) => {
  const nomeUf = req.query.busca;
  const resultado = nomeUf ? buscaUfPorNome(nomeUf) : buscaTodos();
  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ 'Error': 'Nenhuma UF encontrada' });
  }
});

app.get('/ufs/:iduf', (req, res) => {
  const uf = buscaPorId(req.params.iduf);;

  if (uf) {
    res.json(uf);
  } else if (isNaN(parseInt(req.params.iduf))) {
    res.status(400).send({ 'Error': 'Requisição inválida' })
  } else {
    res.status(404).send({ 'error': 'UF não encontrada' });
  }
});

app.listen(8080, () => {
  const data = new Date();

  console.log(`Servidor inicializado em: ${data}`);
});