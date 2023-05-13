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
  state.game += 1;
  console.log(state.word);
  // Generate random index depending of lvl
  const randomArr = randomGeneratorLvl(state.word.length, state.lvl);
  console.log(randomArr);
  state.hidenWord = state.word.map((el, i) =>
    randomArr.some((el) => el === i) ? " " : el
  );
};

const updateStatus = function (incLvl, incWin, incLife) {
  state.lvl += incLvl;
  state.life += incLife;
  state.win += incWin;
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
  /////////// PREVIOUS CODE /////////////////

  // const lvlCorrected = lvl < max - 2 ? lvl : max - 2;
  // const arr = [];
  // for (let i = 0; i < max; i++) {
  //   arr.push(i);
  // }

  /////////// UPDATED CODE /////////////////
  let arrSplit = [];
  arrSplit.push(randomGenerator(max));
  console.log(typeof arrSplit);

  /////////// PREVIOUS CODE /////////////////

  // while (arrSplit.length > lvlCorrected) {
  //   const rdm = randomGenerator(arrSplit.length);
  //   arrSplit.splice(rdm, 1);
  // }

  return arrSplit;
};

export {
  state,
  generateRandomArray,
  updateStatus,
  initStatus,
  generateNewSetOfWords,
};
