---
title: Linux
sidebar_label: Linux
---

## Manage services

### Start service

```shell
systemctl start <name>

service <name> start
```

### Restart service

```shell
systemctl restart networking.service
systemctl restart <name>
service <name> status
```

### Add service to startup

```shell
systemctl enable <name>
```

### Check status of services

```shell
service --status-all
```

### Restart SSH server

```shell
/etc/init.d/ssh restart
systemctl restart sshd
```

### List running processes on specific port

```shell
netstat -ano | findstr :3001
```

### Kill running process

```shell
tskill PID
```

## Commands

### Determine running OS release

```shell
cat /etc/*release
```

```shell
source /etc/os-release

echo $ID
echo $NAME
```

```shell
uname -mrs
```

### Download and extract file

```shell
curl -SL 'url' \
     | tar -xvzf - --strip-components=1 -C /path/to/output/dir
```

> Use `-k` flag to ignore SSL validation. \
> `-C` stands for directory. \
> `--string-components=#` subdirectory level to extract files from.

### Create cron jobs

```shell
crontab -e -u root
```

**Examples:**

Run simple command at scheduled time:

```ascii
0 18 * * 0-6  <command>
```

Run command and log results to file:

```ascii
0 18 * * 0-6  <command> >> /path/to/output.log 2>&1
```

> Use >> to `append` messages to output file, else > to `overwrite`.

File descriptors:

- 1: Standard output (stdout).
- 2: Standard error (stderr).

## OS

### Install packages

> Update installed packages before installing new ones.

```shell
apt-get update && apt-get install <package> <another-package>
```

```shell
dpkg -i <package>
```

Commit package upgrades:

```shell
apt-get upgrade
```

### Install missing dependencies

```shell
apt --fix-broken install
apt-get install -f
```

### Exclude or ignore specific package from upgrades

```shell
apt-mark hold <package>
```

List on hold packages:

```shell
apt-mark showhold
```

## System

### Upgrade OS version

> [Upgrades from previous releases](https://www.debian.org/releases/lenny/amd64/release-notes/ch-upgrading.en.html)

### Enable SSH root login

> /etc/ssh/sshd_config

```ascii
PermitRootLogin yes
PasswordAuthentication yes
```

### Update `$PATH`

```shell
export PATH="$PATH:/usr/sbin"
echo $PATH
```

### Network interface

> /etc/network/interfaces

```shell
auto eth0
  iface eth0 inet static
    address x.x.x.x
    netmask x.x.x.x
    gateway x.x.x.x
```

### DNS

> /etc/resolv.conf

```shell
nameserver x.x.x.x
```

### Set Timezone

```shell
timedatectl set-timezone UTC
```

## Filesystem

### Add user permission to directory

```shell
sudo chown -R <username> path/to/directory
```

### Add file execution permission

```shell
chmod +x /path/to/file
```

### List OS disks

Lists only usable disks:

`df`

Lists all attached disks:

`fdisk -l`

### Delete all hidden files (starts with `.`)

```shell
rm -rf /.[!.]*
```

### Check disk

```shell
fsck -f /dev/disk
```

### Check & fix corrupted partition

1. Boot in recovery mode -> `Linux OS (recovery mode)`

2. Login with root account

3. Unmount partition to be checked:

```shell
umount /dev/partition
```

4. Run command:

```shell
sudo fsck -f /
```

5. Reboot:

```shell
reboot
```

### Check folder permissions

```shell
ls -la path
ls -ld path
```

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

### cifs-utils

```shell
mount -t cifs //<host>/<shared-dir> /mnt/<mount-dir> -o username=<username>,password=<password>,doamin=<domain>,rw,file_mode=0777,dir_mode=0777
```

### Create symbolic link

```shell
sudo ln -s /path/to/link/file.txt /path/to/target/file.txt

sudo ln -s /path/to/link/directory /path/to/target/directory
```

```shell
sudo unlink|rm /path/to/target/(file.txt|directory)
```

## User

### Change password

```shell
passwd
```

### Switch user

```shell
su - username
```

### List users in group

```shell
getent group groupname
```

### Add user to group

```shell
/usr/sbin/adduser username group
```

## Packages

### supervisor

```shell
supervisorctl update
supervisorctl reread
```

Manage programs:

```shell
supervisorctl

start <program>
stop <program>
restart <program>
tail <program>

status
quit
```
