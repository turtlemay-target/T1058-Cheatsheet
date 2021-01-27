import { install } from "esinstall";

install(["jsbarcode", "qrcode"], {
	dest: "www/web_modules",
	polyfillNode: true,
});
