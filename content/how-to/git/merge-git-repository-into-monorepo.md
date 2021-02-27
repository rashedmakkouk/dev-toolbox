---
title: Merge Git Repository into Monorepo
sidebar_label: Merge Git Repository into Monorepo
---

## From a repository

1. Clone repository to a new directory

```shell
git clone <repo-url> <package>
```

2. Filter list of commits

```shell
export TARGET_DIR="packages/<package>"

git filter-branch --prune-empty --tree-filter '
  mkdir -p "$TARGET_DIR"
  git ls-tree --name-only $GIT_COMMIT | xargs -I files mv files "$TARGET_DIR"
'
```

> The --prune-empty - removes commits which are empty due to the rewrite.

## From a monorepo

1. Add remote in monorepo to package

```shell
git remote add <package> /path/to/<package>
```

2. Fetch commits from package

```shell
git fetch <package> --no-tags
```

> --no-tags - do not fetch tags to avoid polluting monorepo tags

3. Merge

```shell
git merge <package>/master --allow-unrelated-histories
```

> --allow-unrelated-histories - override Git restriction to merge branch that\
> doesn't have a common ancestor.

4. Remove remote

```shell
git remote remove <package>
```
