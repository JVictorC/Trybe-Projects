db.trips.aggregate(
  [
    {
      $project: {
        _id: false,
        usertype: true,
        duracaoEmHoras: {
          $divide: [
            { $subtract: ["$stopTime", "$startTime"] }, 60 * 1000 * 60,
          ],
        },
      },
    },
    {
      $group: {
        _id: "$usertype",
        duracaoMedia: { $avg: "$duracaoEmHoras" },
      },
    },
    {
      $project: {
        _id: false,
        tipo: "$_id",
        duracaoMedia: { $round: ["$duracaoMedia", 2] },
      },
    },
    { $sort: { duracaoMedia: 1 } },
  ],
);
