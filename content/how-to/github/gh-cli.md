---
title: GH CLI
sidebar_label: GH CLI
---

## Transfer Issues between repositories

From local repository directory:

```shell
gh issue list -s all -L 500 --json number --jq '.[].number' | \
xargs -I % gh issue transfer % <target-repository>
```

- `s`: Issue State.
- `L`: Limit response records.
- `--json`: JSON format response object.
- `number`: Retrieve number field.
