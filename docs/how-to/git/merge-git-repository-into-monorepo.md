# Merge `Git` repository into monorepo

## From a repository

1. Clone repository to a new directory
`git clone <repo-url> <package-name>`

2. Filter list of commits
```shell
export TARGET_DIR="packages/<package-name>"

git filter-branch --prune-empty --tree-filter '
  mkdir -p "$TARGET_DIR"
  git ls-tree --name-only $GIT_COMMIT | xargs -I files mv files "$TARGET_DIR"
'
```

> The --prune-empty - removes commits which are empty due to the rewrite.

## From a monorepo

1. Add remote in monorepo to <package-name>\
`git remote add <package-name> /path/to/<package-name>`

2. Fetch commits from <package-name>\
`git fetch <package-name> --no-tags`

> --no-tags - do not fetch tags to avoid polluting monorepo tags

3. Merge\
`git merge <package-name>/master --allow-unrelated-histories`

> --allow-unrelated-histories - override Git restriction to merge branch that\
> doesn't have a common ancestor.

4. Remove remote\
`git remote remove <package-name>`
