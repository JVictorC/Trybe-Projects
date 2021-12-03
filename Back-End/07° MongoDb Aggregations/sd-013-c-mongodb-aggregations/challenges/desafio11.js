db.trips.aggregate(
  [
    {
      $project: {
        dayOfWeek: { $dayOfWeek: "$startTime" },
      },
    },
    {
      $group: {
        _id: "$dayOfWeek",
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $project: {
        _id: false,
        diaDaSemana: "$_id",
        total: "$count",
      },
    },
    { $limit: 1 },
  ],
);
