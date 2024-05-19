export default class MenuLink {
  constructor(title, id) {
    this._title = title;
    this._id = id;
  }
  _setAttributes() {
    this._element = document
      .querySelector("#menu-link")
      .content.cloneNode(true);
    this._link = this._element.querySelector(".menu__link");
    this._link.textContent = this._title;
    this._link.setAttribute("href", `#${this._id}`);
  }
  _scroll(evt) {
    const myElement = document.querySelector(`#${this._id}`);
    evt.preventDefault();
    myElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  _setEventListeners() {
    this._link.addEventListener("click", (evt) => {
      this._scroll(evt);
    });
  }
  getLink() {
    this._setAttributes();
    this._setEventListeners();
    return this._element;
  }
}
