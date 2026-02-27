const gameLibrary = require("./game-library");

function getReleasePlatforms(game) {
  const projectItems = game.projectPage?.platforms?.items;
  if (Array.isArray(projectItems) && projectItems.length > 0) {
    return projectItems
      .filter((entry) => entry.catalog !== false)
      .map((entry) => entry.id)
      .filter(Boolean);
  }

  return Array.isArray(game.releasePlatforms) ? game.releasePlatforms : [];
}

module.exports = gameLibrary.map((game) => ({
  id: game.id,
  title: game.title,
  subtitle: game.catalog.subtitle,
  description: game.catalog.description,
  image: game.catalog.image,
  url: game.catalog.url,
  status: game.catalog.status,
  platforms: getReleasePlatforms(game)
}));
