{
  "extends": [
    "eslint:recommended",
    "plugin:svelte3/recommended"
  ],
  "plugins": [
    "svelte3",
    "import"
  ],
  "env": {
    "es2021": true,
    "browser": true,
    "node": true
  },
  "overrides": [
    {
      "files": ["**/*.svelte"],
      "processor": "svelte3/svelte3"
    }
  ],
  "rules": {
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "error"
  },
  "settings": {
    "svelte3/typescript": () => require("typescript")
  }
}
