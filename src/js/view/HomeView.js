import View from "./view";
import Kettyimage from "url:../../img/Ketty.jpg";
import KettyHeartimage from "url:../../img/KettyHeatEyesColor.jpg";
import KettyGlassimage from "url:../../img/KettyGlassEyesColor.jpg";
class HomeView extends View {
  _parentElement = document.querySelector("body");

  _generateMarkup() {
    return `    <header class="header">
      <div class="abs-text"></div>
      <h1 class="primary--title">Guess my word ketty !</h1>
  
      <img
        class="ketty-img"
        id="kettyImage"
        src="${Kettyimage}"
        alt="Katty"
      />
      <img
        class="ketty-img hidden"
        id="kettyImageHeartColor"
        src="${KettyHeartimage}"
        alt="Katty"
      />
      <img
        class="ketty-img hidden"
        id="kettyImageGlassColor"
        src="${KettyGlassimage}"
        alt="Katty"
      />
    </header>
  
    <main class="main container">
      <ul class="word-to-guess-box">
        <!--   <li class="letter-box">
          <input class="letter-to-guess" type="text" />
        </li>
        <li class="letter-box">
          <span class="letter-helper">h</span>
        </li>-->
      </ul>
  
      <button class="btn btn--large btn--start">Let's play !</button>
      <button class="btn btn--large btn--guess hidden">Did you find it!</button>
      <button class="btn btn--again hidden">Again!</button>
      <button class="btn btn--next hidden">Next!</button>
      <button class="btn btn--home hidden">Go to home</button>
  
      <!--Did you find it!-->
      <!--Again!-->
    </main>`;
  }

  addhundlerGoHome(hundler) {
    this._btnHome.addEventListener(
      "click",
      function () {
        hundler();
      }.bind(this)
    );
  }
}

export default new HomeView();
