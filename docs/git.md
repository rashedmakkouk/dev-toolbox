# Git

## Configuration

### Show current configuration
`git config --list`

### First time user details configuartion
> Drop --global to limit config to specific repo

`git config --global user.name <First Last name>`\
`git config --global user.email <email@address.xyz>`

### Add remote URL
`git remote add <url>`

### First time set remote upstream
`git push -u origin master`

## Staging

### Unstage (but retain) all changes since last commit
`git reset`\
`git reset --soft HEAD~1`

### Unstage (& discard) all changes since last commit
`git reset --hard`

### Revert all changes to specific commit in history
`git reset --hard <commit_sha>`

### Unstage file(s) or directory to last commit
`git reset HEAD -- <filename>`\
`git reset HEAD -- .`

### Discard changes to unstaged file(s)
`git checkout -- <filename>`\
`git checkout .`

### Remove file or directory from tree
> Add to `.gitignore` to bypass in future commits.\

`git rm <filename>`\
`git rm -r <dirname>`

### All: Stages all modified, new & deleted files
`git add .`

### update: Stages modified & deleted files, excluding `new` files
`git add -u`

### Stage a specific file or folder
`git add <filename>`\
`git add <dirname>`

### Delete & stage file
`git rm <filename`

### Delete & stage folder
`git rm -r <dirname>`

### Show staged changes
`git status`

### Undo activities
List all executed commands\
`git reflog`

Undo changes to specified activity\
`git reset HEAD@{#}`

## Commits

### Revert changes to a specific commit in history
`git checkout <commit_sha> <filename>`

### Update message only of last commit
`git commit --amend -m "Updated commit message"`

### Update files only of last commit
`git add missed-out-file.ext`\
`git commit --amend --no-edit`

### Update files & message of last commit
`git add missed-out-file.ext`\
`git commit -amend -m "Updated commit files & message"`

### View list of commits
`git log --oneline`\
`git log`\
`git log --stat`

### Messages
> Use open double quotes or \ to write multiline message.\
> Use -m for the header & second -m for the details (separate paragraphs)

### Guidelines
1. Use two separate messages for multi-line lists:
- First message includes a general overview describing the commit.
- Second message includes detailed information about the commit - described below.
2. Use `Summary:` for blocks listing commit changes.
3. Use `Changelog:` for blocks listing changes to include in `CHANGELOG.md` file.
4. Each commit change message should start with a capital letter.
5. Prefix each commit change message with:
* `Breaking:` - Commit includes changes that could break previous API.
* `Chore:` - Tasks and coding activity.
* `Docs:` - Added new entries or updated existing documentation.
* `Enhancement:` - Improving on or expanding on existing functionality or feature.
* `Fix:` - Fixed a bug or regression.
* `Refactor:` - Updating existing code for readability and code standards; no new functionality added.
* `Update:` - Replacing existing code with new API (e.g. ES6 features).
* `Upgrade:` - Includes pa`ckage dependencies, db schema, scripts, etc.

## Branching

### Create branch from tag
`git branch -b <branch_name> <tag_name>`

### Merge (while in master)
Merges all branch commits into one.\
`git merge --squash <branch_name>`

### Branch info
`git branch -a`

### Delete branch
Delete branch from working directory:\
`git branch -d <branch_name>`

Delete branch from remote repository:\
`git push origin --delete <branch_name>`

## Tags
> Semantic versioning guideline: `v<major>.<minor>.<patch>`

### Create tag from branch
`git tag <tag_name>`

### Create annotated tag from branch
`git tag -a <tag_name> -m "Message text"`

### Create tag from commit
`git tag <tag_name> <commit_sha>`

### Push tags to remote repository
`git push --tags`

### Delete tag
From working directory:\
`git tag -d <tag_name>`

From remote repository:\
`git push origin -d <tag_name>`

## Misc

### List files to update from .gitignore
`git ls-files -i -z --exclude-from=.gitignore`

### Remove updated files in .gitignore
`git ls-files -i -z --exclude-from=.gitignore | xargs -0 git rm --cached`

> Commit changes then push to origin to remove from remote repository.

### Reload files after .gitignore change
`git rm -r --cached .`
