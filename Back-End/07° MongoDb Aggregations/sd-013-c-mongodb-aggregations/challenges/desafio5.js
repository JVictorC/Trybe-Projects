const favoritesActores = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney",
];

db.movies.aggregate(
  [
    {
      $match: {
        countries: { $in: ["USA"] },
        "tomatoes.viewer.rating": { $gte: 3 },
        cast: { $exists: true },
      },
    },
    {
      $project: {
        _id: false,
        title: true,
        "tomatoes.viewer.rating": true,
        num_favs: {
          $size: {
            $setIntersection: ["$cast", favoritesActores],
          },
        },
      },
    },
    {
      $sort: {
        num_favs: -1,
        "tomatoes.viewer.rating": -1,
        title: -1,
      },
    },
    {
      $match: {
        title: "The Heat",
      },
    },
    {
      $project: {
        title: true,
      },
    },
  ],
);
