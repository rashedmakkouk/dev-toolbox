---
title: Install Runner
sidebar_label: Install Runner
---

1. Add official repository

```shell
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash
```

2. Install dependencies\
`apt-get install git`

3. Disable `skel` before installation\
`export GITLAB_RUNNER_DISABLE_SKEL=true`

4. Install official repository manually

> [gitlab-runner-downloads](https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html)

```shell
sudo /var/cache/apt/archives/dpkg -i gitlab-runner_<arch>.deb
```

5. Install latest version:

```shell
sudo -E apt-get install gitlab-runner
```
