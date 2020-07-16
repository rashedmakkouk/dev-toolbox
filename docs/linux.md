# Linux

### Configure network interface IP
`nano /etc/network/interfaces`

```
auto eth0
  iface eth0 inet static
    address x.x.x.x
    netmask x.x.x.x
    gateway x.x.x.x
```

### Configure DNS
```
nameserver x.x.x.x
```

### Restart service
`systemctl restart networking.service`\
`systemctl restart nginx`\
`service nginx status`

### Add user to 'root' group
`/usr/sbin/adduser username group`

### List users in group
`getent group groupname`

### Update $PATH
`export PATH="$PATH:/example/path"`\
`echo $PATH`

### Enable ssh root login
`nano /etc/ssh/sshd_config`

```
PermitRootLogin yes
PasswordAuthentication yes
```

### Restart SSH server
`/etc/init.d/ssh restart`\
`systemctl restart sshd`

### Check folder permissions
`ls -la path`\
`ls -ld path`

### Change password
`passwd`

### Switch user
`su - username`

### Logout user
`logout`

### Set Timezone
`timedatectl set-timezone UTC`

### Create cron jobs
`crontab -e -u root`

### Preserve file attributes while cp
`cp -r --preserve=mode,ownership,timestamps [from] [to]`

Available attributes:
- mode
- ownership
- timestamps
- context
- links
- all
