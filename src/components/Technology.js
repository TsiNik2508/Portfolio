export default class Technology {
  constructor({ name, percent}, id) {
    this._name = name;
    this._percent =  percent;
    this._id = id;
  }
  _setAttributes() {
    this._element = document
      .querySelector(`#${this._id}`)
      .content.cloneNode(true);
    this._elementName = this._element.querySelector(".technology__title");
    this._elementProgress = this._element.querySelector(".technology__progress");
    this._elementName.textContent = this._name;
    this._elementProgress.classList.add(`technology__progress_percent_${this._percent}`);
  }
  getTechnology() {
    this._setAttributes();
    return this._element;
  }
}