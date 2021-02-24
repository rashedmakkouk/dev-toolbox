---
title: Create Backup Archive
sidebar_label: Create Backup Archive
---

## Manual Backup

1. Create application instance backup

```shell
gitlab-backup create
```

> Default backup file location `/var/opt/gitlab/backups`

2. Create `Omnibus` configuration backup (/etc/gitlab)

```shell
gitlab-ctl backup-etc
```

Included files:

- `/etc/gitlab/gitlab.rb`
- `/etc/gitlab/gitlab-secrets.json`

> Contains database encryption keys to protect sensitive data in the SQL database.

- `trusted-certs`

> Default backup file location `/etc/gitlab/config_backup`

## Backup via Cron Job

> Example command to run application backup (Linux)\
> Refer to [Cron](https://en.wikipedia.org/wiki/Cron) for more info.

Runs backup command, log to file & move to external directory:

```ascii
0 9,15,21 * * 1-7 gitlab-backup create >> /var/opt/gitlab/backups/backup.log 2>&1 && mv /var/opt/gitlab/backups/*.tar /mnt/shared/gitlab/
0 9,15,21 * * 1-7 gitlab-ctl backup-etc >> /etc/gitlab/config_backup/backup.log 2>&1 && mv /etc/gitlab/config_backup/*.tar /mnt/shared/gitlab/
```
