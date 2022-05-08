---
title: Git
sidebar_label: Git
---

## Changelog

### Output commits metadata

```shell
git log --oneline --decorate

git log --pretty="- %s" > CHANGELOG.md

git log --stat
```

## Config

### Show current configuration

```shell
git config --list
git remote show origin
git config --get remote.origin.url
```

### Add user details

```shell
git config --global user.name <First Last name>
git config --global user.email <email@address.xyz>
```

> Drop --global to limit config to specific repository

### Add commit template

```shell
git config --global commit.template <path/to/.gitmessage.txt>
```

> Drop --global to limit config to specific repository

### Add remote URL

```shell
git remote add origin <url>
```

### Set remote upstream

```shell
git push --set-upstream origin master
git push -u origin master
```

## Repository

### Create a new repository

```shell
git clone git@xxx.xxx.xxx.xxx:path/to/repo.git

cd docs
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

### Push an existing folder

```shell
cd existing_folder
git init
git clone git@xxx.xxx.xxx.xxx:path/to/repo.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

### Push an existing Git repository

```shell
cd existing_repo
git remote rename origin old-origin
git clone git@xxx.xxx.xxx.xxx:path/to/repo.git
git push -u origin --all
git push -u origin --tags
```

## Staging

### Unstage (but retain) all changes since last commit

```shell
git reset
git reset --soft HEAD~1
```

### Unstage (& discard) all changes since last commit

```shell
git reset --hard
```

### Revert all changes to specific commit in history

```shell
git reset --hard <commit_sha>
```

### Unstage file(s) or directory to last commit

```shell
git reset HEAD -- <filename>
git reset HEAD -- .
```

### Discard changes to unstaged file(s)

```shell
git checkout -- <filename>
git checkout .
```

### Remove file or directory from tree

> Add to `.gitignore` to bypass in future commits.  

```shell
git rm <filename>
git rm -r <dirname>
```

### All: Stages all modified, new & deleted files

```shell
git add .
```

### update: Stages modified & deleted files, excluding `new` files

```shell
git add -u
```

### Stage a specific file or folder

```shell
git add <filename>
git add <dirname>
```

### Show staged changes

```shell
git status
```

### Undo activities

List all executed commands:

```shell
git reflog
```

Undo changes to specified activity:

```shell
git reset HEAD@{#}
```

## Commit

### Structure

> See [conventional-commits](https://www.conventionalcommits.org) specification.

```ascii
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Multiple scopes are supported (delimiter options: "/", "\\", ",").

#### Types

- `BREAKING CHANGE`:
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `chore`: Changes to the build process or auxiliary tools and libraries
- `ci`: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- `deprecate`:
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `revert`:
- `style`: Changes that do not affect the meaning of the code (e.g. white space, formatting)
- `test`: Adding missing tests or correcting existing tests

Breaking change commit options:

- Suffix an existing type with `!` to indicate a breaking change

```ascii
refactor!: Breaking change message
```

- Suffix an existing type with `!` and use a footer token to describe the change

```ascii
fix!: New feature message

BREAKING CHANGE: Breaking change message
```

- Use type BREAKING CHANGE followed by colon, space and the message

```ascii
BREAKING CHANGE: Breaking change message
```

#### Scopes

Covers named packages, exceptions include:

- `changelog`
- `migrations`
- `*-infra`

### Revert file changes to a specific commit in history

```shell
git checkout <commit_sha> <filename>
```

### Update message only of last commit

```shell
git commit --amend -m "Updated commit message"
```

### Update files only of last commit

```shell
git add <missed-out-file.ext>
git commit --amend --no-edit
```

### Update files & message of last commit

```shell
git add <missed-out-file.ext>
git commit --amend -m "Updated commit files & message"
```

### View list of commits

```shell
git log --oneline
git log
git log --stat
```

### Compare file from two different commits

```shell
git diff <commit#1>:<file-path> <commit#2>:<file-path>
```

### Message

> Use open double quotes to write multiline message.  
> Use -m for the header & second -m for the details (separate paragraphs)

## Branches

### Create branch

Switch to the branch you want to create a new branch in.

- From scratch:

```shell
git branch <branch_name>
```

- From tag/commit/branch:

```shell
git branch <branch_name> <[tag|commit|branch]_name>
```

### Switch to branch

```shell
git switch <branch_name>
```

### Rename branch

> If branch is already published, delete remote branch, create and push a new branch.

```shell
git branch -M <new_name>
```

### Merge branch

> Creates a new commit.

Merge all branch commits into active branch:

```shell
git merge --squash <branch_name>
```

### Rebase branch

> Merges commits to active branch.

Switch to branch to bring changes into.

```shell
git rebase <branch_name>
```

### Compare branches

```shell
git log origin/main..<branch_name>
```

### Get branch info

```shell
git branch -a
git branch -v
```

### Publish branch

```shell
git push -u origin <branch_name>
```

### Track branch

```shell
git checkout --track origin/<branch_name>
```

### Delete branch

- Delete branch from working directory:

```shell
git branch -d <branch_name>
```

- Delete branch from remote repository:

```shell
git push origin --delete <branch_name>
```

## Tags

> Semantic versioning guideline: `v<major>.<minor>.<patch>`; see
> [semver](https://semver.org) form more details.

### Create tag from branch

```shell
git tag <tag_name>
```

### Create annotated tag from branch

```shell
git tag -a <tag_name> -m "Message text"
```

### Create tag from commit

```shell
git tag <tag_name> <commit_sha>
```

### Push tags to remote repository

```shell
git push --tags
```

### Delete tag

From working directory:

```shell
git tag -d <tag_name>
```

From remote repository:

```shell
git push origin -d <tag_name>
```

## Stash

### Save changes to stach

```shell
git stash save "<message>"
```

### View stashed changes

```shell
git stash list
```

### View summary of changes

```shell
git stash show <stash>
```

> Include `-p` (for patch) option to view changes in diff-style patch layout.

### Retrieve stashed changes

Apply changes and leave a copy in the stash:

```shell
git stash apply <stash>
```

Apply changes and remove files from the stash:

```shell
git stash pop <stach>
```

> Use `merge` procedures to resolve conflicts.

### Delete stashed changes

```shell
git stash drop <stash>
git stash clear
```

## Misc

### List files to update from `.gitignore`

```shell
git ls-files -i -z --exclude-from=.gitignore
```

### Remove updated files in `.gitignore`

Method #1:

```shell
git ls-files -i --exclude-from=.gitignore | xargs -0 git rm -r -n --cached
```

Method #2:

```shell
git rm -r -n --cached `git ls-files -i --exclude-from=.gitignore`
```

> -i: ignored  
> -r: recursive  
> -n: dry run; list affected files

Commit changes and push to origin to remove/update from remote repository.

### List modified files

By duration:

```shell
git diff $(git log -1 --before=@{last.day} --format=%H) --stat | uniq
```

Since specified time:

```shell
git diff $(git log -1 --before=@{4.hours.ago} --format=%H) --stat | uniq
```

#### Datetime keywords

day  
hour  
week  
month  

### Clear working tree cache

```shell
git rm -r --cached <directory>
```

### Undo clear working tree cache

```shell
git reset HEAD .
```

> If not committed.

```shell
git reset HEAD~1
```

> If commited.
