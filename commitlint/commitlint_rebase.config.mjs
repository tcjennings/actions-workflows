const rebase_error_message = `
This step failed because you merged the default into a development branch.

In order to bring this pull request to a mergeable state, update the default.
`.trim();

export default {
  defaultIgnores: false,
  ignores: [(commit) => !/^Merge branch/.test(commit)],
  plugins: [
    {
      rules: {
        "rebase-checker": (commitMessage, when, pattern) => {
          const { raw } = commitMessage;
          if (!pattern) return [false, "missing pattern"];
          const regex = new RegExp(pattern);
          let result = regex.test(raw ?? "");
          if (when === "never") result = !result;
          return [result, rebase_error_message];
        },
      },
    },
  ],
  rules: {
    "rebase-checker": [
      2,
      "never",
      /^Merge branch '?(main|master)'? into (.*?)(?:\r?\n)*$/,
    ],
  },
};
