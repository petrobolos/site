const gameLibrary = require("../game-library");

const game = gameLibrary.find((entry) => entry.id === "escape-from-hong-kong");

if (!game || !game.projectPage) {
  throw new Error("Missing project data for escape-from-hong-kong in src/_data/game-library.js");
}

module.exports = {
  title: game.title,
  ...game.projectPage
};
