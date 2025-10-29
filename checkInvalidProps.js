// checkInvalidProps.js
// 🔍 Script to detect invalid React DOM props (common typos like classNameName, fill-rule, datetime, etc.)

import fs from "fs";
import path from "path";

// Folder to scan (your src folder)
const rootDir = path.resolve("./src");

// Common invalid React DOM props to detect
const invalidProps = [
  "classNameName",
  "fill-rule",
  "clip-path",
  "stroke-width",
  "datetime",
  "tabindex",
];

// Recursive function to scan files
function scanFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanFiles(fullPath);
    } else if (file.endsWith(".jsx") || file.endsWith(".js")) {
      const content = fs.readFileSync(fullPath, "utf8");
      invalidProps.forEach((prop) => {
        const regex = new RegExp(prop, "gi");
        const matches = [...content.matchAll(regex)];
        if (matches.length > 0) {
          console.log(`⚠️ Found "${prop}" in: ${fullPath}`);
        }
      });
    }
  });
}

// Run
console.log("🔎 Scanning for invalid React props...\n");
scanFiles(rootDir);
console.log("\n✅ Scan complete!");
