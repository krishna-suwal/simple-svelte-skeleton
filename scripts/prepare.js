const path = require("path");
const fs = require("fs-extra");
const mkdirp = require("make-dir");
const distPath = path.resolve(__dirname, "..", "dist");

(async function () {
	const tasks = [
		{
			desc: "Clean dist directory...",
			callback: cleanDistDirectory,
		},
		{
			desc: "Create dist directory...",
			callback: createDistDirectory,
		},
		{
			desc: "Install dependecies...",
			callback: installDependecies,
		},
		{
			desc: "Build svelte code...",
			callback: buildSvelteComponents,
		},
		{
			desc: "Copy raw component files...",
			callback: copyRawComponentFiles,
		},
	];

	for (let i = 0; i < tasks.length; i += 1) {
		console.log(`\n[${i + 1}/${tasks.length}] ${tasks[i].desc}`);
		await tasks[i].callback();
	}
})();

function cleanDistDirectory() {
	return new Promise((resolve, reject) => {
		require("child_process")
			.exec("npx rimraf ./dist", (error, stdout, stderr) => {
				if (error) {
					return reject(error);
				}
				if (stderr) {
					return reject(stderr);
				}
				console.log(`stdout: ${stdout}`);
			})
			.on("exit", resolve)
			.on("error", reject);
	});
}
function createDistDirectory() {
	return mkdirp(path.resolve(distPath, "bundled"));
}
function installDependecies() {
	return new Promise((resolve, reject) => {
		require("child_process")
			.exec("yarn install", (error, stdout, stderr) => {
				if (error) {
					return reject(error);
				}
				if (stderr) {
					return reject(stderr);
				}
				console.log(`stdout: ${stdout}`);
			})
			.on("exit", resolve)
			.on("error", reject);
	});
}
function buildSvelteComponents() {
	return new Promise((resolve, reject) => {
		require("child_process")
			.exec(
				"rollup -c rollup.config.prod.js",
				(error, stdout, stderr) => {
					if (error) {
						return reject(error);
					}
					if (stderr) {
						return reject(stderr);
					}
					console.log(`stdout: ${stdout}`);
				}
			)
			.on("exit", resolve)
			.on("error", reject);
	});
}
function copyRawComponentFiles() {
	const filesToCopy = [
		{
			from: path.resolve(__dirname, "..", "src", "Skeleton"),
			to: path.resolve(distPath, "Skeleton"),
		},
		{
			from: path.resolve(__dirname, "..", "src", "index.js"),
			to: path.resolve(distPath, "index.js"),
		},
	];

	return Promise.all(filesToCopy.map((file) => fs.copy(file.from, file.to)));
}
