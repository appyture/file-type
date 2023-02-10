const path = require("path");
const esbuild = require("esbuild");
const plugin = require("node-stdlib-browser/helpers/esbuild/plugin");
const stdLibBrowser = require("node-stdlib-browser");

(async () => {
	await esbuild.build({
		format: "esm",
		bundle: true,
		entryPoints: ["browser.js"],
		outfile: "dist/index.esm.mjs",
		inject: [require.resolve("node-stdlib-browser/helpers/esbuild/shim")],
		define: {
			global: "global",
			process: "process",
		},
		plugins: [plugin(stdLibBrowser)],
	});
})();
