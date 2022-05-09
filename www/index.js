/**
 * @param {string | null} icon The registed icon name or an image URL.
 */
export function getIconUrl(icon = "") {
	const template = document.getElementsByTagName("template").namedItem("icons-map-template");
	const url = template?.content?.getElementById(icon ?? "")?.getAttribute("src") ?? null;
	return url ?? icon;
}
