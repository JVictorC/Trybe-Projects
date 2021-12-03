db.produtos.updateMany(
  {
  },
  {
    $rename: {
      descricao: "descricaoSite",
    },
  },
);

db.produtos.find(
  {},
  {
    nome: true,
    descricaoSite: true,
    descricao: true,
    _id: false,
  },
);
