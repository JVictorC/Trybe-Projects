db.resumoVoos.insertOne(
{
empresa: "PASSAREDO",
totalVoosDomesticos: db.voos.count(
  {
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  },
),
},
);

db.resumoVoos.find({}, { _id: false });