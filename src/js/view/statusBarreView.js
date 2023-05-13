import View from "./view";

class StatusBarreView extends View {
  _parentElement = document.querySelector(".abs-text");

  _data;

  _generateMarkup() {
    return ` 
    <p class="lvls">lvl ${this._data.lvl}</p>
    <p class="wins">Win  ${this._data.win}</p>
    <p class="lifes">life  ${this._data.life}</p>
 `;
  }
}

export default new StatusBarreView();
