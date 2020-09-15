# Git

## CONFIG

### Show current configuration

`git config --list`\
`git remote show origin`\
`git config --get remote.origin.url`

### First time user details configuartion

> Drop --global to limit config to specific repo

`git config --global user.name <First Last name>`\
`git config --global user.email <email@address.xyz>`

### Add remote URL

`git remote add <url>`

### Set remote upstream

> Full command is required on first push only, use `git push` afterwards.\
`git push -u origin master`

## REPOSITORIES

### Create a new repository

```
git clone git@xxx.xxx.xxx.xxx:path/to/repo.git

cd docs
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

### Push an existing folder
```
cd existing_folder
git init
git clone git@xxx.xxx.xxx.xxx:path/to/repo.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

### Push an existing Git repository
```
cd existing_repo
git remote rename origin old-origin
git clone git@xxx.xxx.xxx.xxx:path/to/repo.git
git push -u origin --all
git push -u origin --tags
```

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

### Show staged changes

`git status`

### Undo activities

List all executed commands\
`git reflog`

Undo changes to specified activity\
`git reset HEAD@{#}`

## Commits

### Revert file changes to a specific commit in history

`git checkout <commit_sha> <filename>`

### Update message only of last commit

`git commit --amend -m "Updated commit message"`

### Update files only of last commit

`git add <missed-out-file.ext>`\
`git commit --amend --no-edit`

### Update files & message of last commit

`git add <missed-out-file.ext>`\
`git commit -amend -m "Updated commit files & message"`

### View list of commits

`git log --oneline`\
`git log`\
`git log --stat`

### Messages

> Use open double quotes or \ to write multiline message.\
> Use -m for the header & second -m for the details (separate paragraphs)

## Branching

### Create branch from tag

`git branch -b <branch_name> <tag_name>`

### Merge (while in master)

Merge all branch commits into one:\
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

### List files to update from `.gitignore`

`git ls-files -i -z --exclude-from=.gitignore`

### Remove updated files in `.gitignore`

`git ls-files -i -z --exclude-from=.gitignore | xargs -0 git rm --cached`

> Commit changes then push to origin to remove from remote repository.

### Clear working tree cache

`git rm -r --cached .`

### Undo clear working tree cache

`git reset HEAD .`
> If not committed.

`git reset HEAD~1`
> If commited.
