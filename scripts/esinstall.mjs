import { install } from "esinstall";

await install(["jsbarcode", "qrcode"], {
	dest: "www/web_modules",
	polyfillNode: true,
});
