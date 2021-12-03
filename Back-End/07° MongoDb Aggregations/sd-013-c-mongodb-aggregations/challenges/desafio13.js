// dateDiff https://docs.mongodb.com/manual/reference/operator/aggregation/dateDiff/#examples

db.trips.aggregate(
  [
    {
      $match: {
        startTime: {
          $gte: ISODate("2016-03-10"),
          $lt: ISODate("2016-03-11"),
        },
      },
    },
    {
      $group: {
        _id: null,
        teste: {
          $avg: {
            $dateDiff: {
              startDate: "$startTime",
              endDate: "$stopTime",
              unit: "minute",
            },
          },
        },
      },
    },
    {
      $project: {
        _id: false,
        duracaoMediaEmMinutos: { $ceil: "$teste" },
      },
    },
  ],
);
