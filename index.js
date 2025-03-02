const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

function validateEnv(envPath = ".env", filePath = ".env.example") {
  dotenv.config();

  const filePath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`MISSING FILE: ${filePath}`);
  }


function envVars = fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) => line.split("=")[0])
    .filter(key => key !== "!key.startsWith('#')");

    const missingVars = envVars.filter((key) => !process.env[key]);
    if (missingVars.length) {
      throw new Error(`MISSING ENV VARS: ${missingVars.join(", ")}`);
    }

    console.log("✅ ENV VARS VALIDATED ");
}

module.exports = validateEnv;