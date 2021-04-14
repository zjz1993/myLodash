import typescript from "rollup-plugin-typescript2";
import path from "path";
import buble from "@rollup/plugin-buble";
// const typescript = require("@rollup/plugin-typescript");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

export default [
  {
    input: resolveFile("src/index.ts"),
    output: {
      file: resolveFile("dist/index.js"),
      format: "umd",
      name: "simpleLodash",
    },
    plugins: [typescript(), buble()],
  },
  {
    input: resolveFile("src/index.ts"),
    output: {
      file: resolveFile("dist/esm/index.js"),
      format: "es",
      name: "plainlodash",
    },
    plugins: [typescript(), buble()],
  },
];
