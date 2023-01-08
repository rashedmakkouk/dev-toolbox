---
title: Version Control
sidebar_label: Version Control
---

## Commit

### Message

1. Use two separate messages for multi-line tasks:

* First message includes a general overview describing the commit.
* Second message includes detailed information about the commit - described in the table below.

2. Use `Summary:` as header for blocks listing commit changes.

3. Use `Changelog:` as header for blocks listing changes to include in `CHANGELOG.md` file.

4. Each commit change message should start with a capital letter after its `prefix`.

5. Add `type` prefix for each commit change message.

### Change `type`s

| Prefix    | Description              |
|---       |---                |
| breaking:  | Commit includes changes that could break previous API.   |
| chore:    | Tasks and coding activity.          |
| deprecated | Remove outdated or refactored code block or package.    |
| docs     | Added, updated or deprecated documentation entries.    |
| enhancement | Improve or expand on existing functionality or feature.   |
| fix       | Fix a bug or a regression.          |
| refactor  | Update existing code; no new functionality added.     |
| update    | Replace existing code with new API or change functionality.  |
| upgrade    | Including package dependencies, db schema, scripts, etc.   |
