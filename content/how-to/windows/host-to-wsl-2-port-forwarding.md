---
title: Host to WSL 2 Port Forwarding
sidebar_label: Host to WSL 2 Port Forwarding
---

> [Netsh interface portproxy](https://docs.microsoft.com/en-us/windows-server/networking/technologies/netsh/netsh-interface-portproxy)

## Add port forwarding rule

The following rule listens on the local host IP address `0.0.0.0` and forwards
requests to a WSL 2 instance.

```terminal
netsh interface portproxy add v4tov4 listenport=<port-no> listenaddress=0.0.0.0 connectport=<port-no> connectaddress=<wsl-2-ip>
```

> 0.0.0.0 refers to localhost IP address.

## Remove port forwarding rule

```terminal
netsh interface portproxy delete v4tov4 listenport=<port-no> listenaddress=<x.x.x.x>
```

## List port forwarding rules

```terminal
netsh interface portproxy show all
```

## Automate port forwarding

You can deploy Windows service to automate configuration on boot; check out the
[service template](../../templates/wsl-2-port-forwarding.ps1).
