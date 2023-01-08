---
title: VirtualBox
sidebar_label: VirtualBox
---

## Configuration

### Guest Additions[^1]

1. Devices menu -> Insert Guest Additions CD image menu

2. In command line, mount the CD:

```shell
mount /dev/cdrom /media/cdrom
```

3. Install dependencies:

```shell
apt-get update && \
  apt-get install build-essential dkms linux-headers-$(uname -r)
```

4. Run installation script:

```shell
/media/cdrom/./VBoxLinuxAdditions.run
```

5. Reboot VM

```shell
sudo shutdown -r now
```

6. Verify

```shell
lsmod | grep vboxguest
```

### [Fine Tuning Timers and Time Synchronization][fine-tune-timers]

```shell
./VBoxManage setextradata <vm-name> "VBoxInternal/Devices/VMMDev/0/Config/GetHostTimeDisabled" 0

./VBoxManage guestproperty set <vm-name> "/VirtualBox/GuestAdd/VBoxService/timesync-set-on-restore" 1
```

## Commands

### Compact guest virtual disk[^2]

```shell
./VBoxManage.exe modifyhd "X:\path\to\hdd.vdi" --compact
```

### Convert virtual disk format

```shell
./VBoxManage.exe clonehd <source> <target> --format <vhd|vdi>
```

## REFERENCES

[^1]: Enables mounting `Shared Folders` to instance via GUI or run `mount -t vboxsf shared ~/shared` from host.
[^2]: Only works on `vdi` disk format.

[fine-tune-timers]: https://docs.oracle.com/en/virtualization/virtualbox/6.0/admin/fine-tune-timers.html "Oracle documentation"
