customElements.define("x-page", class extends HTMLElement {
	connectedCallback() {
		const template = document.getElementsByTagName("template").namedItem("x-page-template");

		if (!template) return;

		const f = document.importNode(template.content, true);
		const parentEl = f.querySelector(".storeItem__list");

		for (const v of this.querySelectorAll("*"))
			parentEl?.append(v);

		this.replaceWith(f);
	}
});
