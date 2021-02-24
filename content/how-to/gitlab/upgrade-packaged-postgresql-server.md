---
title: Upgrade Packaged Postgresql Server
sidebar_label: Upgrade Packaged Postgresql Server
---

> [Official Guide](https://docs.gitlab.com/omnibus/settings/database.html#upgrade-packaged-postgresql-server)

## System Check

Check database size:

```shell
sudo du -sh /var/opt/gitlab/postgresql/data
```

Confirm enough free space is availble:

```shell
sudo df -h
```

## Upgrade

```shell
sudo gitlab-ctl pg-upgrade -V 12
```

## Clean up

> Verify everything is working before running the following commands.

```shell
sudo rm -rf /var/opt/gitlab/postgresql/data.<old_version>

sudo rm -f /var/opt/gitlab/postgresql-version.old
```
