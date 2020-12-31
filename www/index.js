import "./components/x-qr-item.js";
import "./components/x-barcode-item.js";

/**
 * @param {string | null} name
 */
export function getIconUrl(name = "") {
	const template = document.getElementsByTagName("template").namedItem("icons-map-template");
	return template?.content?.getElementById(name ?? "")?.getAttribute("src") ?? "";
}
