# GitLab

## Table of Contents

### [Instance Config](./config.md)

### [Docker Setup](./docker/index.md)

### Commands

`service gitlab restart`\
`gitlab-ctl reconfigure`\
`gitlab-ctl start`\
`gitlab-ctl stop`

### Self-hosted instance prerequisites

#### Linux

> Run `shell sudo gitlab-ctl reconfigure` after restoring a configuration backup.

##### Packages

> Update installed packages before installing new ones.

```shell
apt-get update && apt-get install -y cron
```

* `cron`
* `net-tools`
* `curl`
* `ca-certificates`
* `openssh-server`
* VBox Guest Additions
* Standard System Utilities
