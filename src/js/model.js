import { LIFE } from "./config";

let data = [];

const state = {
  word: [],
  hidenWord: [],
  lvl: 1,
  life: LIFE,
  win: 0,
  game: 0,
};

const generateNewSetOfWords = async function () {
  try {
    state.game = 0;
    const resp = await fetch("https://random-word-api.vercel.app/api?words=3");

    if (!resp) throw Error("Problem loeading data");

    const dataSet = await resp.json();

    data = dataSet;
  } catch (err) {
    console.error(err);
  }
};

const generateRandomArray = function () {
  // Generate random word to guess from data

  state.word = Array.from(data[state.game]);
  console.log(state.word);
  state.game = state.game + 1;

  // Generate random index depending of lvl
  const randomArr = randomGeneratorLvl(state.word.length, state.lvl);

  state.hidenWord = state.word.map((el, i) =>
    randomArr.some((el) => el === i) ? " " : el
  );
};

const updateStatus = function (incLvl, incWin, incLife) {
  state.lvl = state.lvl + incLvl;
  state.life = state.life + incLife;
  state.win = state.win + incWin;
};

const initStatus = function () {
  state.lvl = 1;
  state.life = LIFE;
  state.win = 0;
  state.word = [];
  state.hidenWord = [];
  state.game = 0;
};

// helper function :

const randomGenerator = function (max) {
  return Math.floor(Math.random() * max);
};

const randomGeneratorLvl = function (max, lvl = 1) {
  const lvlCorrected = lvl < max - 2 ? lvl : max - 2;
  const arr = [];
  for (let i = 0; i < max; i++) {
    arr.push(i);
  }
  const arrSplit = arr;
  while (arrSplit.length > lvlCorrected) {
    const rdm = randomGenerator(arrSplit.length);
    arrSplit.splice(rdm, 1);
  }
  return arrSplit;
};

export {
  state,
  generateRandomArray,
  updateStatus,
  initStatus,
  generateNewSetOfWords,
};
