# Git

## Configuration

### Show current configuration
`git config --list`

### First time configuartion
`git config --global user.name <First Last name>`
`git config --global user.email <email@address.xyz>`

> Drop --global to limit config to specific repo

## Staging

### Unstage (but retain) all changes since last commit
`git reset`

### Unstage (& discard) all changes since last commit
`git reset --hard`

### Revert all changes to specific commit in history
`git reset --hard <commit_ID>`

### Unstage file(s) to last commit
`git reset HEAD filename.ext`
`git reset HEAD .`

### Discard changes to unstaged file(s)
`git checkout -- filename.ext`
`git checkout .`

### Remove incorrectly added file
`git rm filename.ext`

### All: Stages all modified, new & deleted files
`git add .`

### update: Stages modified & deleted files, without new
`git add -u`

### Stage a specific file or folder (repeat as needed)
`git add filename.ext`
`git add foldername`

### Delete & stage file
`git rm filename.ext`

### Delete & stage folder
`git rm -r foldername`

### Show staged changes
`git status`

## Commits

### Revert changes to a specific commit in history
`git checkout <commit_ID> filename.ext`

### Update message only of last commit
`git commit --amend -m "Updated commit message"`

### Update files only of last commit
`git add missed-out-file.ext`
`git commit --amend --no-edit`

### Update files & message of last commit
`git add missed-out-file.ext`
`git commit -amend -m "Updated commit files & message"`

### View list of commits
`git log --oneline`
`git log`
`git log --stat`

### Messages
> Use open double quotes or \ to write multiline message.
> Use -m for the header & second -m for the details (separate paragraphs)

## Branching

### Create branch from tag
`git branch -b <branchname> <tagname>`

### Merge (while in master)
> Merges all branch commits into one.
`git merge --squash branch`

### Branch info
`git branch -a`

### Delete branch
`git branch -d branchname`
`git push origin --delete branchname`

## Tags

### Create tag from branch
`git tag <tagname>`

### Create tag from commit
`git tag <tagname> <commit checksum>

### Push tags to remote repository
`git push --tags`

### Delete tag
> From working directory:
`git tag -d <tagname>`

> From remote repository:
`git push origin -d <tagname>`

## Misc

### List files to update from .gitignore
`git ls-files -i -z --exclude-from=.gitignore`

### Remove updated files in .gitignore
`git ls-files -i -z --exclude-from=.gitignore | xargs -0 git rm --cached`

> Commit changes then push to origin to remove from remote repository.

### Reload files after .gitignore change
`git rm -r --cached .`