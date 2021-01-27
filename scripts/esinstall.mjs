import { install } from "esinstall";

Function.call.call(async () => {
	await install(["jsbarcode", "qrcode"], {
		dest: "www/web_modules",
		polyfillNode: true,
	});
});
