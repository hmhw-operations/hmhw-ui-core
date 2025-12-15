import { readdir, writeFile } from "fs";
import { join, extname, basename } from "path";
import { platform } from "os";

// Note to OMLM: npm run generate-svg-types
// Function to adjust the path for Windows
const adjustPathForWindows = (path) => {
  // eslint-disable-next-line no-undef
  return process.platform === "win32" ? path.substring(1) : path;
};

const getPath = (path) => {
  console.log(path);
  if (platform() === "win32") {
    return adjustPathForWindows(new URL(path, import.meta.url).pathname);
  }
  return path;
};

const svgDirPath = join(getPath("./src/static/icons"));
const outputPath = join(getPath("./src/components/icon/types.ts"));

readdir(svgDirPath, (err, files) => {
  if (err) {
    console.error("Error reading the directory", err);
    return;
  }

  const svgNames = files
    .filter((file) => extname(file) === ".svg")
    .map((file) => `"${basename(file, ".svg")}"`)
    .join(" | ");

  const typeDefinition = `export type SvgName = ${svgNames};\n`;

  writeFile(outputPath, typeDefinition, (err) => {
    if (err) {
      console.error("Error writing the type definition file", err);
    } else {
      console.log("Type definition file generated successfully.");
    }
  });
});
