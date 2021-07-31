import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import { writeFileSync } from "fs";
import path from "path";

export default {
	input: "src/index.js",
	output: {
		format: "cjs",
		name: "simple-svelte-skeleton",
		file: "dist/bundled/index.js",
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: false,
			},
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({
			output: function (styles, styleNodes) {
				writeFileSync(
					path.resolve(__dirname, "dist/bundled/style.css"),
					styles
				);
			},
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ["svelte"],
		}),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		terser(),
	],
};
