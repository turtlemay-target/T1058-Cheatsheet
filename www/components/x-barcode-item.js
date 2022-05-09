import JsBarcode from "../web_modules/jsbarcode.js";

import { getIconUrl } from "../icons.js";

customElements.define("x-barcode-item", class extends HTMLElement {
	connectedCallback() {
		const template = document.getElementsByTagName("template").namedItem("x-barcode-item-template");

		if (!template) return;

		const name = this.getAttribute("name");
		const value = this.getAttribute("value");
		const iconUrl = getIconUrl(this.getAttribute("icon"));

		const f = document.importNode(template.content, true);

		const nameEl = f.querySelector('[data-id="name"]');
		const valueEl = f.querySelector('[data-id="value"]');
		const canvasEl = f.querySelector("canvas");

		/** @type {HTMLElement | null} */
		const bgEl = f.querySelector('[data-id="icon"]');

		if (nameEl) nameEl.textContent = name;
		if (valueEl) valueEl.textContent = value;
		if (canvasEl && value) renderBarcode(canvasEl, value);
		if (bgEl) bgEl.style.backgroundImage = `url("${iconUrl}")`;

		this.replaceWith(f);
	}
});

/**
 * @param {HTMLCanvasElement} elem
 * @param {string} value
 */
function renderBarcode(elem, value) {
	JsBarcode(elem, value, {
		displayValue: false,
		height: 100,
		width: 1,
		margin: 0,
		flat: true,
		background: "white",
	});
}
