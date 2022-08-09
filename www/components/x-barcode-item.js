import JsBarcode from "jsbarcode";

customElements.define("x-barcode-item", class extends HTMLElement {
	connectedCallback() {
		const template = document.getElementsByTagName("template").namedItem("x-barcode-item-template");

		if (!template) return;

		const name = this.getAttribute("name");
		const value = this.getAttribute("value");
		const iconUrl = this.getAttribute("icon");
		const badgeIconUrl = this.getAttribute("badge-icon");

		const f = document.importNode(template.content, true);

		const nameEl = f.querySelector('[data-id="name"]');
		const valueEl = f.querySelector('[data-id="value"]');
		const canvasEl = f.querySelector("canvas");

		/** @type {HTMLElement | null} */
		const bgEl = f.querySelector('[data-id="icon"]');

		/** @type {HTMLElement | null} */
		const badgeIconEl = f.querySelector('[data-id="badge-icon"]');

		if (nameEl) nameEl.textContent = name;
		if (valueEl) valueEl.textContent = value;
		if (canvasEl && value) renderBarcode(canvasEl, value);
		if (bgEl) bgEl.style.backgroundImage = `url("${iconUrl}")`;
		if (badgeIconEl) badgeIconEl.style.backgroundImage = `url("${badgeIconUrl}")`;

		this.replaceWith(f);
	}
});

/**
 * @param {HTMLCanvasElement} elem
 * @param {string} value
 */
function renderBarcode(elem, value) {
	JsBarcode(elem, value, {
		format: "CODE128",
		displayValue: false,
		height: 100,
		width: 1,
		margin: 0,
		flat: true,
		background: "white",
	});
}
