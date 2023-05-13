export default class View {
  _errorMessage;
  _lvls = document.querySelector(".lvls");
  _lifes = document.querySelector(".lifes");
  _wins = document.querySelector(".wins");
  _btnStart = document.querySelector(".btn--start");
  _btnHome = document.querySelector(".btn--home");
  _btnGuess = document.querySelector(".btn--guess");
  _btnAgain = document.querySelector(".btn--again");
  _btnNext = document.querySelector(".btn--next");
  _kattyImg = document.getElementById("kettyImage");
  _kattyImgHeartColor = document.getElementById("kettyImageHeartColor");
  _kattyImgGlassColor = document.getElementById("kettyImageGlassColor");

  render(data) {
    if (Array.isArray(data) && data.length === 0) return;
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _renderErrorMessage() {
    this._clear();
    const markup = `<p class="error-message">
    ${this._errorMessage}
  </p>`;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
