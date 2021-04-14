process.env.NODE_ENV = "production";

import { uglify } from "rollup-plugin-uglify";
import configList from "./rollup.config";

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

configList.map((config, index) => {
  config.output.sourcemap = false;
  config.plugins = [...config.plugins, ...[uglify()]];

  return config;
});
export default configList;
