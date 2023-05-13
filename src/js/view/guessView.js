import View from "./view";

class GuessView extends View {
  _parentElement = document.querySelector(".word-to-guess-box");

  _data;
  _errorMessage = "We have a problem loading data reload the page";

  guessTheme() {
    document.querySelector(".primary--title").innerText =
      "GUESS MY WORD KETTY !";
    document.documentElement.style.setProperty("--backgrountcolor", "#868e96");
    document.documentElement.style.setProperty("--separetionBorder", "#868e96");
    document.documentElement.style.setProperty("--boxColor", "#adb5bd");
    document.documentElement.style.setProperty("--borderGuessTin", "#f8f0fc");
    document.documentElement.style.setProperty("--borderLargeTin", " #e8e3eb");
    document.documentElement.style.setProperty("--borderLargeShade", "#dcdbd7");
    this._btnGuess.innerText = "Let's play !";
    this._btnNext.classList.add("hidden");

    this._btnAgain.classList.add("hidden");
    this._btnGuess.classList.remove("hidden");
    this._kattyImg.classList.remove("hidden");
    this._kattyImgGlassColor.classList.add("hidden");
    this._kattyImgHeartColor.classList.add("hidden");
  }

  _generateMarkup() {
    return this._data
      .map((el) =>
        el === " "
          ? ` <li class="letter-box">
   <input maxlength="1" class="letter-to-guess letter" type="text" />
 </li>`
          : `<li class="letter-box">
    <span class="letter-helper letter" >${el}</span>
  </li>`
      )
      .join("");
  }

  addhundlerStart(hundler) {
    this._btnStart.addEventListener(
      "click",
      async function (e) {
        await hundler();
        this._btnStart.classList.add("hidden");
        this._btnGuess.classList.remove("hidden");
        this._btnHome.classList.remove("hidden");
      }.bind(this)
    );
  }

  addhundlerGuess(hundler) {
    this._btnGuess.addEventListener(
      "click",
      function (e) {
        const arr = [];
        const wordNode = [...this._parentElement.querySelectorAll(".letter")];
        if (wordNode.some((el) => el?.value === "")) {
          wordNode.forEach((el) => {
            if (el?.value === "") {
              el.style.border = "5px solid var(--btnLostTin)";
              el.style.transform = "translateY(-1rem)";
            }
          });
          return;
        }
        this._disableEnableInputs(true);
        wordNode.forEach((el) => {
          el.nodeName === "INPUT" ? arr.push(el.value) : arr.push(el.innerHTML);
          el.style.border = "5px solid var(--fontColor)";
          el.style.transform = "";
        });
        hundler(arr);
      }.bind(this)
    );
  }

  addhundlerReplay(life) {
    this._btnGuess.innerText = `${life} chance left`;
    this._parentElement.querySelectorAll(".letter-to-guess").forEach((el) => {
      el.disabled = false;
      el.value = "";
    });
  }

  // Helpers :

  _disableEnableInputs(bol) {
    this._parentElement
      .querySelectorAll(".letter-to-guess")
      .forEach((el) => (el.disabled = bol));
  }
}

export default new GuessView();
/* https://random-word-api.herokuapp.com/word */
