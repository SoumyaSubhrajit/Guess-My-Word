import * as model from "./model";
import guessView from "./view/guessView";
import winView from "./view/winView";
import lostView from "./view/lostView";
import nextLvlView from "./view/nextLvlView";
import statusBarreView from "./view/statusBarreView";
import homeView from "./view/HomeView";

const init = function () {
  guessView.addhundlerStart(controlStartBtn);
  guessView.addhundlerGuess(controlGuessBtn);
  winView.addhundlerNext(controlNextBtn);
  lostView.addhundlerAgain(controlAgainBtn);
};

const controlStartBtn = async function () {
  await model.generateNewSetOfWords();
  model.generateRandomArray();
  guessView.render(model.state.hidenWord);
  statusBarreView.render(model.state);
  homeView.addhundlerGoHome(controlGoHome);
};

const controlGuessBtn = function (arr) {
  if (JSON.stringify(model.state.word) === JSON.stringify(arr)) {
    if (model.state.win === 2) {
      model.updateStatus(0, 1, 3);
      nextLvlView.nextLvlTheme();
      statusBarreView.render(model.state);
      return;
    }
    model.updateStatus(0, 1, 0);
    statusBarreView.render(model.state);
    winView.winTheme();
  }

  if (JSON.stringify(model.state.word) !== JSON.stringify(arr)) {
    model.updateStatus(0, 0, -1);
    if (model.state.life === 0) {
      statusBarreView.render(model.state);
      lostView.lostTheme();
      guessView.render(model.state.word);
      return;
    }
    statusBarreView.render(model.state);
    guessView.addhundlerReplay(model.state.life);
  }
};
const controlNextBtn = async function () {
  if (model.state.win === 3) {
    model.updateStatus(1, -3, 0);
    await model.generateNewSetOfWords();
  }
  model.generateRandomArray();
  guessView.guessTheme();
  guessView.render(model.state.hidenWord);
  statusBarreView.render(model.state);
};

const controlAgainBtn = async function () {
  model.initStatus();
  await model.generateNewSetOfWords();
  model.generateRandomArray();
  guessView.guessTheme();
  guessView.render(model.state.hidenWord);
  statusBarreView.render(model.state);
};

const controlGoHome = function () {
  model.initStatus();
  homeView.render();
  init();
};

init();
