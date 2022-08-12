import * as fs from "fs/promises";
import { Generator } from "@jspm/generator";

const generator = new Generator({ env: ["production", "browser", "module"] });

await generator.install(["qrcode", "jsbarcode"]);

const IMPORT_MAP_OUTPUT_FILE = "www/importmap.json";

const fileData = JSON.stringify(generator.getMap(), null, "\t");

await fs.writeFile(IMPORT_MAP_OUTPUT_FILE, fileData + "\n");
console.info(`Wrote imports to file "${IMPORT_MAP_OUTPUT_FILE}".`, fileData);
