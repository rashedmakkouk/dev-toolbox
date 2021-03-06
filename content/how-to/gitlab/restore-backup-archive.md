---
title: Restore Backup Archive
sidebar_label: Restore Backup Archive
---

> Run `gitlab-cli reconfigure` at least once before executing a restore.

> Refer to backup file as `BACKUP=timestamp_of_backup`.

## Omnibus

1. Copy application backup archive file:

```shell
cp 11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar /var/opt/gitlab/backups/
```

Set required permissions:

```shell
chown git.git /var/opt/gitlab/backups/11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar
```

2. Copy `gitlab-secrets` file and `trusted-certs`:

```shell
cp /backups/secrets/gitlab-secrets.json|gitlab.rb /etc/gitlab/
```

3. Stop GitLab services:

```shell
sudo gitlab-ctl stop puma

sudo gitlab-ctl stop sidekiq
```

> Run `sudo gitlab-ctl status` to verify services are down.

4. Execute restore command:

> This command will overwrite the contents of your GitLab database!

```shell
gitlab-backup restore BACKUP=1493107454_2018_04_25_10.6.4-ce
```

5. Verification steps:

* Confirm restore command completed successfully:

```shell
sudo gitlab-rake gitlab:check SANITIZE=true
```

* Run post-restore commands (if necessary):

```shell
sudo gitlab-ctl restart

sudo gitlab-ctl reconfigure
```
