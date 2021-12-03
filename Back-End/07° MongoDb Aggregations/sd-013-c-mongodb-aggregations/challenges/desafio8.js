db.air_alliances.aggregate(
  [
    {
      $unwind: "$airlines",
    },
    {
      $lookup: {
        from: "air_routes",
        localField: "airlines",
        foreignField: "airline.name",
        as: "all_routes",
      },
    },
    {
      $unwind: "$all_routes",
    },
    {
      $match: {
        $or: [
          { "all_routes.airplane": "380" },
          { "all_routes.airplane": "747" },
        ],
      },
    },
    {
      $group: {
        _id: "$name",
        totalRotas: { $sum: 1 },
      },
    },
    {
      $sort: { totalRotas: -1 },
    },
    { $limit: 1 },
  ],
);
