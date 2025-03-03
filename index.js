const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

function validateEnv(envPath = ".env", requiredPath = ".env.required") {
  dotenv.config({ path: envPath });

  const requiredFilePath = path.resolve(process.cwd(), requiredPath);
  if (!fs.existsSync(requiredFilePath)) {
    throw new Error(`❌ Missing required environment file: ${requiredPath}. Great job.`);
  }

  const requiredVars = fs
    .readFileSync(requiredFilePath, "utf-8")
    .split("\n")
    .map((line) => line.split("=")[0].trim())
    .filter((key) => key && !key.startsWith("#"));

  const missingVars = requiredVars.filter((key) => !process.env[key]);

  if (missingVars.length) {
    throw new Error(`❌ Missing required environment variables: ${missingVars.join(", ")}. Maybe actually set them?`);
  }

  console.log("✅ All required environment variables are set! Shocking.");
}

module.exports = validateEnv;
