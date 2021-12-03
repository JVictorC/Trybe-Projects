db.produtos.updateOne(
  {
    nome: "Big Mac",
  },
  {
    $set: {
      ultimaModificacao: new Date(),
    },
  },
);

db.produtos.findOne(
  {
    ultimaModificacao: { $exists: true },
  },
  {
    nome: true,
    _id: false,
  },
);