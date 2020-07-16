# GitLab

## Commands and How-to's

`service gitlab restart`\
`gitlab-ctl reconfigure`
> Remember to run sudo gitlab-ctl reconfigure after restoring a configuration backup.

## BACKUP

### Folders to backup
/etc/gitlab

### https://superuser.com/questions/532040/copy-ssh-keys-from-one-server-to-another-server/532079#532079
/etc/ssh

### STEPS
A.
`winpty docker exec -it gitlab bash`
`gitlab-ctl backup-etc /var/backups/gitlab (default folder: /etc/gitlab/config_backup)`

B.
### Backup Application
docker exec -t gitlab gitlab-backup create

### Cron job
### use -qq to suppress error messages
### separate multiple packages with space
1. apt-get update && apt-get install -y cron

### https://serverfault.com/questions/449651/why-is-my-crontab-not-working-and-how-can-i-troubleshoot-it
crontab -e -u root
0 18 * * 0-6  gitlab-backup create
0 18 * * 0-6  gitlab-ctl backup-etc /secret/gitlab/backups

### https://devconnected.com/docker-exec-command-with-examples/
### ./docker-entrypoint.sh
docker exec -i gitlab bash < /docker-entrypoint.sh

## RESTORE
> Command `gitlab-cli reconfigure` should be run at least once prior to any restoration.

### DOCKER
docker exec -it gitlab gitlab-backup restore

### Packages
[gitlab-ee](https://packages.gitlab.com/gitlab/gitlab-ee)

### Omnibus
BACKUP=timestamp_of_backup

1. Copy backup archive file\
`cp 11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar /var/opt/gitlab/backups/`

> Set required permissions

`chown git.git /var/opt/gitlab/backups/11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar`

2. Stop GitLab services prior to running restore command\
`sudo gitlab-ctl stop puma`\
`sudo gitlab-ctl stop sidekiq`\
`sudo gitlab-ctl stop`

3. Verify all services are down\
`sudo gitlab-ctl status`

4. Restore backup archive file
> This command will overwrite the contents of your GitLab database!

`gitlab-backup restore BACKUP=1493107454_2018_04_25_10.6.4-ce`

5. Restore GitLab `secrets` files and certificates\
`cp /backups/secrets/gitlab-secrets.json|gitlab.rb /etc/gitlab/`

6. Run post-restore commands\
`sudo gitlab-ctl reconfigure`\
`sudo gitlab-ctl restart`\
`sudo gitlab-rake gitlab:check SANITIZE=true`

### GitLab backup (cron jobs)
```
# Example 1
0 9,15,21 * * 1-7 gitlab-backup create >> /var/opt/gitlab/backups/backup.log 2>&1 && mv /var/opt/gitlab/backups/*.tar /mnt/backups/gitlab/
0 9,15,21 * * 1-7 gitlab-ctl backup-etc >> /etc/gitlab/config_backup/backup.log 2>&1 && mv /etc/gitlab/config_backup/*.tar /mnt/configs/gitlab/

# Example 2
0 9,15,21 * * 1-7 gitlab-backup create >> /var/opt/gitlab/backups/backup.log 2>&1
0 9,15,21 * * 1-7 gitlab-ctl backup-etc >> /etc/gitlab/config_backup/backup.log 2>&1
0 10,16,22 * * 1-7 mv /var/opt/gitlab/backups/* /mnt/backups/gitlab/
0 10,16,22 * * 1-7 mv /etc/gitlab/config_backup/* /mnt/configs/gitlab/

# Example 3
0 9,15,21 * * 1-7 gitlab-ctl backup-etc
0 9,15,21 * * 1-7 gitlab-backup create
0 10,16,22 * * 1-7 cp -r --preserve=mode,timestamps /var/opt/gitlab/backups/* /mnt/backups/gitlab/ && rm /var/opt/gitlab/backups/*
0 10,16,22 * * 1-7 cp -r --preserve=mode,timestamps /etc/gitlab/config_backup/* /mnt/configs/gitlab/ && rm /etc/gitlab/config_backup/*

# Example 4
> Use >> to append messages to output file, else > to overwrite.
0 11,17,22 * * 1-7 gitlab-ctl backup-etc && cd /etc/gitlab/config_backup && cp $(ls -t | head -n1) /var/opt/gitlab/backups/ >> /var/opt/gitlab/backups/backup.log 2>&1
0 11,17,22 * * 1-7 gitlab-backup create >> /var/opt/gitlab/backups/backup.log 2>&1
0 12,18,23 * * 1-7 cp -r --preserve=mode,timestamps /var/opt/gitlab/backups/gitlab_config* /mnt/backups/gitlab/
```

### Log standard output & errors to file
```
59 23 * * * [command] > /var/opt/gitlab/backups/backup.log 2>&1
```

## Install Runner

### Add official repository
```
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash
```

### Install dependencies
`apt-get install git`

### Disable `skel` before installation
`export GITLAB_RUNNER_DISABLE_SKEL=true`

### Install official repository manually
> https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html

`/var/cache/apt/archives/dpkg -i gitlab-runner_<arch>.deb`

### Install latest version
`sudo -E apt-get install gitlab-runner`
