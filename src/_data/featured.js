const gameLibrary = require("./game-library");

const featuredGame =
  gameLibrary.find((game) => game.homepageFeature?.enabled) || gameLibrary[0];

if (!featuredGame) {
  module.exports = {};
} else {
  module.exports = {
    title: featuredGame.title,
    subtitle:
      featuredGame.homepageFeature?.subtitle ||
      featuredGame.catalog?.subtitle ||
      "",
    description:
      featuredGame.homepageFeature?.description ||
      featuredGame.catalog?.description ||
      "",
    background:
      featuredGame.homepageFeature?.background ||
      featuredGame.catalog?.image ||
      "",
    image:
      featuredGame.homepageFeature?.image || featuredGame.catalog?.image || "",
    url: featuredGame.catalog?.url || `/games/${featuredGame.id}/`,
    releaseDate: featuredGame.homepageFeature?.releaseDate || "",
  };
}
