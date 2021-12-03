db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

// ref https://stackoverflow.com/questions/13449874/how-to-sort-array-inside-collection-record-in-mongodb

db.produtos.find(
  {},
  {
    nome: true,
    valoresNutricionais: true,
    _id: false,
 },
);
