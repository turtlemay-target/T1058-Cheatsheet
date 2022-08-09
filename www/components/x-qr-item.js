import QRCode from "qrcode";

customElements.define("x-qr-item", class extends HTMLElement {
	connectedCallback() {
		const template = document.getElementsByTagName("template").namedItem("x-qr-item-template");

		if (!template) return;

		const name = this.getAttribute("name");
		const value = this.getAttribute("value");
		const iconUrl = this.getAttribute("icon");

		const f = document.importNode(template.content, true);

		const nameEl = f.querySelector('[data-id="name"]');
		const valueEl = f.querySelector('[data-id="value"]');
		const canvasEl = f.querySelector("canvas");

		/** @type {HTMLElement | null} */
		const bgEl = f.querySelector('[data-id="icon"]');

		if (nameEl) nameEl.textContent = name;
		if (valueEl) valueEl.textContent = value;
		if (canvasEl && value) renderQR(canvasEl, value);
		if (bgEl) bgEl.style.backgroundImage = `url("${iconUrl}")`;

		this.replaceWith(f);
	}
});

/**
 * @param {HTMLCanvasElement} elem
 * @param {string} value
 */
function renderQR(elem, value) {
	QRCode.toCanvas(elem, value, { scale: 3, margin: 0 }, (err) => {
		if (err) console.error(err);
	});
}
