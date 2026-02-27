const gameLibrary = require("./game-library");

function pickFeaturedGame(games) {
  const enabledFeatures = games.filter((game) => game.homepageFeature?.enabled);
  if (enabledFeatures.length > 0) {
    const randomIndex = Math.floor(Math.random() * enabledFeatures.length);
    return enabledFeatures[randomIndex];
  }

  return games[0];
}

const featuredGame = pickFeaturedGame(gameLibrary);

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
