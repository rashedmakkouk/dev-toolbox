---
title: Run Script as a Service
sidebar_label: Run Script as a Service
---

> [Overview on systemd unit files](https://unix.stackexchange.com/a/367237)

## Config File

> /etc/systemd/system/name.service

```ascii
[Unit]
Description=
After=reboot.target network.target
StartLimitBurst=5
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
# Use number as `seconds`
RestartSec=1min
RemainAfterExit=true
User=<username>
ExecStart=/bin/bash /path/to/<name>.service

[Install]
# Location to store service on `enable`
WantedBy=multi-user.target
Alias=<name>.service
```

## Commands

### [Start service](../../devops/linux.md#start-service)

### [Restart service](../../devops/linux.md#restart-service)

### [Add service to startup](../../devops/linux.md#add-service-to-startup)
