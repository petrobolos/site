const gameLibrary = require("../game-library");

const game = gameLibrary.find((entry) => entry.id === "a-dog-tale");

if (!game || !game.projectPage) {
  throw new Error("Missing project data for a-dog-tale in src/_data/game-library.js");
}

module.exports = {
  title: game.title,
  ...game.projectPage
};
