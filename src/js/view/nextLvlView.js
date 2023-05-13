import View from "./view";

class NextLvlView extends View {
  _parentElement;
  _data;

  nextLvlTheme() {
    console.log("hello");
    document.querySelector(".primary--title").innerHTML =
      "you get 3 more lifes !<br>Ready for the next lvl ! ";
    document.documentElement.style.setProperty("--backgrountcolor", "#9c36b5");
    document.documentElement.style.setProperty("--separetionBorder", "#9c36b5");
    document.documentElement.style.setProperty("--boxColor", "#da77f2");
    document.documentElement.style.setProperty("--btnWinTin", " #be4bdb");
    document.documentElement.style.setProperty("--borderWin", "#9c36b5");
    document.documentElement.style.setProperty("--borderLargeTin", " #be4bdb");
    document.documentElement.style.setProperty("--borderLargeShade", "#9c36b5");

    document.documentElement.style.setProperty("--borderGuessTin", "#343a40");
    this._btnNext.classList.remove("hidden");
    this._btnGuess.classList.add("hidden");
    this._kattyImg.classList.add("hidden");
    this._kattyImgHeartColor.classList.remove("hidden");
  }
}

export default new NextLvlView();
