class btnFolder extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <div>
      <img src="./img/folder.jpg" />
      <div>노란고양이</div>
    </div> `;
  }
}

customElements.define("btn-folder", btnFolder);
