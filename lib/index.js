const fs = require("fs");
const path = require("path");
const { globby } = require("globby");
const licenses = require("./licenses");
const chalk = require("chalk").default;

async function addLicenseHeaders({
  dir = ".",
  license = "mit",
  author = "Your Name",
  extensions = ["js", "ts", "py"],
  dryRun = false
}) {
  const baseDir = path.resolve(dir);

  const files = await globby(`**/*.{${extensions.join(",")}}`, {
    cwd: baseDir,
    gitignore: true,
    absolute: true,
    onlyFiles: true,
    followSymbolicLinks: false
  });

  const licenseTemplate = licenses[license]?.(author);
  if (!licenseTemplate) {
    throw new Error(`Unsupported license: ${license}`);
  }

  for (const file of files) {
    // Ensure file is within the working directory
    if (!file.startsWith(baseDir)) {
      console.warn(chalk.red(`Skipping (outside cwd): ${file}`));
      continue;
    }

    const content = fs.readFileSync(file, "utf8");

    if (content.includes("MIT License") || content.includes("Apache License")) {
      console.log(chalk.yellow(`Skipping (already licensed): ${path.relative(baseDir, file)}`));
      continue;
    }

    const updated = `${licenseTemplate}\n\n${content}`;

    if (dryRun) {
      console.log(chalk.blue(`[dry-run] Would update: ${path.relative(baseDir, file)}`));
    } else {
      fs.writeFileSync(file, updated, "utf8");
      console.log(chalk.green(`Updated: ${path.relative(baseDir, file)}`));
    }
  }
}

module.exports = addLicenseHeaders;
