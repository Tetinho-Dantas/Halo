import fs from "fs";
import path from "path";

const dir = path.resolve("public", "assets", "png");

if (!fs.existsSync(dir)) {
  console.error("Directory not found:", dir);
  process.exit(1);
}

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".b64"));
if (files.length === 0) {
  console.log("No .b64 files found in", dir);
  process.exit(0);
}

for (const file of files) {
  const fullPath = path.join(dir, file);
  const outputPath = path.join(dir, file.replace(/\.b64$/, ""));
  const b64 = fs.readFileSync(fullPath, "utf8").trim();
  fs.writeFileSync(outputPath, Buffer.from(b64, "base64"));
  console.log("Wrote", outputPath);
}

console.log("Done.");
