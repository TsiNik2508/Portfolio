export default class Icon {
  constructor({ link, icon }, id) {
    this._link = link;
    this._icon = icon;
    this._id = id;
  }
  _setAttributes() {
    this._element = document
      .querySelector(`#${this._id}`)
      .content.cloneNode(true);
    this._elementImage = this._element.querySelector("img");
    this._elementLink = this._element.querySelector("a");
    this._elementImage.src = this._icon;
    this._elementLink.setAttribute("href", this._link);
  }
  getIcon() {
    this._setAttributes();
    return this._element;
  }
}
