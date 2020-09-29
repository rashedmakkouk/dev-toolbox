# Setup Instance

> Self-hosted instance.

## Linux

### Prerequisites

1. Install following packages:

* `cron`
* `net-tools`
* `curl`
* `ca-certificates`
* `openssh-server`

2. Install [VBox Guest Additions](../../devops/virtualbox.md)

> Needed to enable sharing mounts between host and guest machines.

## Installation

1. Download latest stable [package](https://packages.gitlab.com/gitlab/gitlab-ee)

2. Installation command

`sudo dpkg -i gitlab-ee_xx.x.x-ee.0_amd64.deb`
