---
title: Setup Git Commit Linting
sidebar_label: Setup Git Commit Linting
---

## Prerequisites

> Excecute `yarn init` and `git init` commands before you proceed.

Install the following packages:

```shell
yarn add --dev @commitlint/cli @commitlint/config-conventional
```

## Config

### husky

> .huskyrc.json

```json
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### commitlint

> .commitlintrc.json

```shell
yarn add --dev @commitlint/config-conventional
```

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

See [reference rules](https://commitlint.js.org/#/reference-rules).

### okonet / lint-staged

> .lintstagedrc.json

```shell
yarn add --dev eslint prettier

npx mrm lint-staged
```

```json
{
  "*": "prettier --check"
}
```
