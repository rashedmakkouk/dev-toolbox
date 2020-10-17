# Create & Mount a new Disk

## Create VHD

Use any hypervisor to create a virtual hard disk, then attach to virtual\
machine via SCSI Controller.

### Create disk partition

> Refer to [List OS Disks](../../devops/linux.md#List-OS-Disks).

1. Partition disk

`fdisk /dev/sdb`

`p` to list available partitions

`n` create new partition

`e` set as extended partition

`#` set number of partitions (1)

`sector` set default values for start and end sectors

`t` set system type (83 Linux)

2. Write changes from memory

`w` write partition table

`mkfs -t ext2 /dev/sdb` write file system

`fsck /dev/sdb -f -y` check partition

> Restart system to commit changes.

3. Mount disk

- Create directory to map disk to

`mkdir /mnt/<dirname>`

- Mount disk to directory

`mount -t ext2 /dev/sdb /mnt/<dirname>`
