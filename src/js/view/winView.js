import View from "./view";

class WinView extends View {
  _parentElement;
  _data;
  _errorMessage = "We have a problem loading data reload the page";

  winTheme() {
    document.querySelector(".primary--title").innerText = "winner congrats !";
    document.documentElement.style.setProperty("--backgrountcolor", "#5c940d");
    document.documentElement.style.setProperty("--separetionBorder", "#5c940d");
    document.documentElement.style.setProperty("--boxColor", "#e9fac8");
    document.documentElement.style.setProperty("--borderGuessTin", "#343a40");
    document.documentElement.style.setProperty("--btnWinTin", "#94d82d");
    document.documentElement.style.setProperty("--borderWin", "#5c940d");
    document.documentElement.style.setProperty("--borderLargeTin", "#94d82d");
    document.documentElement.style.setProperty("--borderLargeShade", "#5c940d");
    this._btnNext.classList.remove("hidden");
    this._btnGuess.classList.add("hidden");
    this._kattyImg.classList.add("hidden");
    this._kattyImgHeartColor.classList.remove("hidden");
  }

  addhundlerNext(hundler) {
    this._btnNext.addEventListener(
      "click",
      async function () {
        await hundler();
      }.bind(this)
    );
  }
}

export default new WinView();
