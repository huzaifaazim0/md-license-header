# md-license-header

> Add or update license headers in code files using MIT, Apache 2.0, or custom templates — from the command line.

---

## ✅ Features

- Adds license headers to `.js`, `.ts`, `.py`, `.java`, and other supported files
- Skips files that already contain a license
- Supports **MIT** and **Apache-2.0** (more coming soon)
- Programmatic API and CLI
- Dry-run mode to preview changes
- Git-aware: respects `.gitignore`

---

## 🚀 Installation

```bash
npm install -g md-license-header
````

Or use without installing:

```bash
npx md-license-header
```

---

## 🧪 Usage (CLI)

```bash
npx md-license-header --license mit --author "Your Name" --path ./src
```

### Options

| Flag        | Alias | Description                             | Default       |
| ----------- | ----- | --------------------------------------- | ------------- |
| `--license` | `-l`  | License type (`mit`, `apache`)          | `mit`         |
| `--author`  | `-a`  | Author name for the license             | `"Your Name"` |
| `--ext`     | `-e`  | Comma-separated list of file extensions | `js,ts,py`    |
| `--path`    | `-p`  | Target directory to scan                | `.` (cwd)     |
| `--dry`     | `-d`  | Preview changes without writing files   | `false`       |

### Example

```bash
npx md-license-header --license apache --author "Huzaifa Azim" --ext js,ts,py --path ./src
```

---

## 💻 Programmatic API

```js
const addLicenseHeaders = require("md-license-header");

addLicenseHeaders({
  dir: "./src",
  license: "mit",
  author: "Huzaifa",
  extensions: ["js", "ts", "py"],
  dryRun: false
});
```

---

## 🧹 Skipping Files

* Files already containing a license block (e.g. "MIT License", "Apache License") are **not modified**
* `.gitignore` is respected automatically

---

## 📜 License Templates

Currently supported:

* `mit`
* `apache`

You can easily extend the `lib/licenses.js` file to add your own.

---

## 📦 Roadmap

* [ ] Support SPDX-only headers (e.g. `// SPDX-License-Identifier`)
* [ ] Add more license types: BSD, MPL, GPL
* [ ] File-specific overrides
* [ ] `--remove` mode to strip licenses

---

## 👥 Contributing

Pull requests are welcome!
Please open an issue to discuss features or improvements before submitting.

---

## 📄 License

MIT © 2025 Huzaifa Azim