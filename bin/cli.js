#!/usr/bin/env node

const minimist = require("minimist");
const addLicenseHeaders = require("../lib");

const args = minimist(process.argv.slice(2), {
  string: ["license", "author", "ext"],
  boolean: ["dry"],
  alias: {
    l: "license",
    a: "author",
    d: "dry",
    e: "ext"
  },
  default: {
    license: "mit",
    author: "Your Name",
    ext: "js,ts,py"
  }
});

addLicenseHeaders({
  dir: ".",
  license: args.license,
  author: args.author,
  extensions: args.ext.split(","),
  dryRun: args.dry
}).catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
