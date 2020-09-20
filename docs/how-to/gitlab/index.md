# GitLab - How-to

## SYSTEM

### Commands

`service gitlab restart`\
`gitlab-ctl reconfigure`\
`gitlab-ctl start`\
`gitlab-ctl stop`

> Run ```shell sudo gitlab-ctl reconfigure``` after restoring a configuration backup.

```shell
apt-get update && apt-get install -y cron
```

### SSH files

/etc/ssh

> [Copy SSH keys from one server to another server](https://superuser.com/questions/532040/copy-ssh-keys-from-one-server-to-another-server/532079#532079)

### Upgrade application package

[gitlab-ee](https://packages.gitlab.com/gitlab/gitlab-ee)

## CREATE BACKUP

1. Create application instance backup
`gitlab-backup create`

> Default backup file location `/var/opt/gitlab/backups`

2. Create `Omnibus` configuration backup (/etc/gitlab)
`gitlab-ctl backup-etc`

Included files:
* `/etc/gitlab/gitlab.rb`
* `/etc/gitlab/gitlab-secrets.json`
> contain database encryption keys to protect sensitive data in the SQL database.
* `trusted-certs`

> Default backup file location `/etc/gitlab/config_backup`

## RESTORE BACKUP

> Run `gitlab-cli reconfigure` at least once before executing a restore.

> Refer to backup file as `BACKUP=timestamp_of_backup`.

### Omnibus

1. Copy application backup archive file:\
`cp 11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar /var/opt/gitlab/backups/`

> Set required permissions:\
`chown git.git /var/opt/gitlab/backups/11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar`

2. Copy `gitlab-secrets` file and `trusted-certs`:\
`cp /backups/secrets/gitlab-secrets.json|gitlab.rb /etc/gitlab/`

3. Stop GitLab services:\
`sudo gitlab-ctl stop puma`\
`sudo gitlab-ctl stop sidekiq`

> Run `sudo gitlab-ctl status` to verify services are down.

4. Execute restore command:\
> This command will overwrite the contents of your GitLab database!

`gitlab-backup restore BACKUP=1493107454_2018_04_25_10.6.4-ce`

5. Verification steps:
* Confirm restore command completed successfully:\
`sudo gitlab-rake gitlab:check SANITIZE=true`

* Run post-restore commands (if necessary):\
`sudo gitlab-ctl restart`\
`sudo gitlab-ctl reconfigure`\

### Cron jobs example to run application backup (Linux)

> Refer to [Cron](https://en.wikipedia.org/wiki/Cron) for more info.

Runs backup command, log to file & move to external directory:
```ascii
0 9,15,21 * * 1-7 gitlab-backup create >> /var/opt/gitlab/backups/backup.log 2>&1 && mv /var/opt/gitlab/backups/*.tar /mnt/backups/gitlab/
0 9,15,21 * * 1-7 gitlab-ctl backup-etc >> /etc/gitlab/config_backup/backup.log 2>&1 && mv /etc/gitlab/config_backup/*.tar /mnt/configs/gitlab/
```

## RUNNER

## Installation

1. Add official repository:
```shell
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash
```

2. Install dependencies:
`apt-get install git`

3. Disable `skel` before installation:
`export GITLAB_RUNNER_DISABLE_SKEL=true`

4. Install official repository manually:
> [gitlab-runner-downloads](https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html)

```shell
sudo /var/cache/apt/archives/dpkg -i gitlab-runner_<arch>.deb
```

5. Install latest version:
```shell
sudo -E apt-get install gitlab-runner
```
