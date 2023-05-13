import View from "./view";

class LostView extends View {
  _parentElement;
  _data;
  _errorMessage;

  lostTheme() {
    document.querySelector(".primary--title").innerText =
      "You Lost try again !";
    document.documentElement.style.setProperty("--backgrountcolor", "#fa5252");
    document.documentElement.style.setProperty("--separetionBorder", "#ff6b6b");
    document.documentElement.style.setProperty("--boxColor", "#ffa8a8");
    document.documentElement.style.setProperty("--borderGuessTin", "#343a40");
    document.documentElement.style.setProperty("--borderLargeTin", " #ffa8a8");
    document.documentElement.style.setProperty("--borderLargeShade", "#fa5252");
    this._btnAgain.classList.remove("hidden");
    this._btnGuess.classList.add("hidden");
    this._kattyImg.classList.add("hidden");
    this._kattyImgGlassColor.classList.remove("hidden");
  }

  addhundlerAgain(hundler) {
    this._btnAgain.addEventListener(
      "click",
      async function () {
        await hundler();
      }.bind(this)
    );
  }
}

export default new LostView();
