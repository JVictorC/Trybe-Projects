db.trips.aggregate(
  [
    {
      $group: {
        _id: "$bikeid",
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
        bikeId: "$_id",
        duracaoMedia: { $ceil: "$teste" },
      },
    },
    {
      $sort: {
        duracaoMedia: -1,
      },
    },
    { $limit: 5 },
  ],
);
