db.trips.aggregate(
  [
    {
      $project: {
        startStationName: true,
        dayOfWeek: { $dayOfWeek: "$startTime" },
      },
    },
    {
      $match: {
        dayOfWeek: 5,
      },
    },
    {
      $group: {
        _id: "$startStationName",
        count: { $sum: 1 },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
    {
      $project: {
        _id: false,
        nomeEstacao: "$_id",
        total: "$count",
      },
    },
    { $limit: 1 },
  ],
);
