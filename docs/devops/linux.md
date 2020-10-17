# Linux

## CONFIG

### Network interface

> nano /etc/network/interfaces

```shell
auto eth0
  iface eth0 inet static
    address x.x.x.x
    netmask x.x.x.x
    gateway x.x.x.x
```

### DNS

> nano /etc/resolv.conf

```shell
nameserver x.x.x.x
```

### Update $PATH

`export PATH="$PATH:/example/path"`\
`echo $PATH`

### Enable ssh root login

> nano /etc/ssh/sshd_config

```ascii
PermitRootLogin yes
PasswordAuthentication yes
```

### Set Timezone

`timedatectl set-timezone UTC`

## SYSTEM

### Restart service

`systemctl restart networking.service`\
`systemctl restart nginx`\
`service nginx status`

### Restart SSH server

`/etc/init.d/ssh restart`\
`systemctl restart sshd`

### Create cron jobs
`crontab -e -u root`

Examples:
* Run simple command at scheduled time:\
`0 18 * * 0-6  <command>`

* Run command and log results to file:\
`0 18 * * 0-6  <command> >> /path/to/output.log 2>&1`
> Use >> to append messages to output file, else > to overwrite.

File descriptors:
* 1: Standard output (stdout).
* 2: Standard error (stderr).

### Install missing dependencies
`apt --fix-broken install`\
`sudo apt-get install -f`

### Install packages

```shell
apt-get update && apt-get install -y <package>
```

```shell
sudo dpkg -i <package>
```

> Update installed packages before installing new ones.

### OS Upgrade
> [Upgrades from previous releases](https://www.debian.org/releases/lenny/amd64/release-notes/ch-upgrading.en.html)

#### OS Config

* /etc/ssh/sshd_config
```ascii
PermitRootLogin yes
```
* Update path
```shell
export PATH="$PATH:/usr/sbin"
```

## File System

### List OS disks

`df`

> Lists only usable disks.

`fdisk -l`

> Lists all attached disks.

### Delete all hidden files (starts with `.`)

```shell
rm -rf /.[!.]*
```

### Check disk

```shell
fsck -f /dev/disk
```

### Check & fix corrupted partition

1. Boot in recovery mode
> `Linux OS (recovery mode)`

2. Login with root account

3. Unmount partition to be checked\
`umount /dev/partition`

4. Run command\
`sudo fsck -f /`

5. Reboot\
`reboot`

### Check folder permissions

`ls -la path`\
`ls -ld path`

### Conditional `mkdir`

```Shell
if not exist path/to/dir mkdir path\\to\\dir
```

### Preserve file attributes on copy
`cp -r --preserve=mode,ownership,timestamps <source> <destination>`

Available attributes:
- mode
- ownership
- timestamps
- context
- links
- all

## USER

| Task                    | Command                               |
|---                      |---                                    |
| Change password         |   `passwd`                            |
| Switch user             | `su - username`                       |
| List users in group     | `getent group groupname`              |
| Add user to group       | `/usr/sbin/adduser username group`    |
| Logout user             | `logout`                              |
