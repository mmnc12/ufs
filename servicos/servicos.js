import colecaoUf from "../dados/dados.js"

export const buscaTodos = () => {
  return colecaoUf;
};

export const buscaPorId = (id) => {
  const iduf = parseInt(id);
  return colecaoUf.find(u => u.id === iduf);
};

export const buscaUfPorNome = (nomeUf) => {
  return colecaoUf.filter((uf) => uf.nome.toLocaleLowerCase().includes(nomeUf));
};



