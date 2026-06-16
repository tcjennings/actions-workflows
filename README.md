# actions-workflows
Reusable Github actions workflows.

## Worfklows

### Commitlint
This workflow performs a [commitlint](https://commitlint.js.org) action on the commits in a branch or pull request.

By default, [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) rules are used with `commitlint`, although the caller can provide their own rules file.

An additional check may be applied, called `rebase-checker`, which uses a custom rules file to assert that no merge commits of the `main` (or `master`) branch have been made, encouraging the use of `rebase` instead.

#### Configuration Inputs

| Input | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `lint-commits` | boolean | false | `true` | Lint commit messages in current branch or PR according to conventional-commit or custom rules (see `custom-rules` input). |
| `rebase-checker` | boolean | false | `false` | Check for merge commits of main or master into this branch, encouraging rebase behavior instead. |
| `custom-rules` | string | false | `@commitlint/config-conventional` | Custom rules module to use with lint-commits (relative path to file in calling repository, e.g., `.github/config.ts`) |
| `verbose` | boolean | false | `false` | Whether to run `commitlint` commands with the `--verbose` flag. |
| `workflow-repo` | string | false | `tcjennings/actions-workflows` | The name of the workflow repository (i.e., the repository hosting this workflow and its tooling). |
| `workflow-ref` | string | false | `main` | The branch name in the workflow repository from which the tooling should be used. |
