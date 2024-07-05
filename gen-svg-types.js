import { readdir, writeFile } from "fs";
import { join, extname, basename } from "path";

// Function to adjust the path for Windows
const adjustPathForWindows = (path) => {
  // eslint-disable-next-line no-undef
  return process.platform === "win32" ? path.substring(1) : path;
};

const svgDirPath = join(adjustPathForWindows(new URL("./src/static/icons", import.meta.url).pathname));
const outputPath = join(adjustPathForWindows(new URL("./src/components/icon/types.ts", import.meta.url).pathname));

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
