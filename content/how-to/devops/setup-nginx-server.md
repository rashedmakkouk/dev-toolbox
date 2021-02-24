---
title: Setup Nginx Server
sidebar_label: Setup Nginx Server
---

This [package](../../templates/index.md) serves both as a container to run a
proxy server, load balancer and reverse proxy based on `Nginx` or as a
configuration reference to build bare metal proxy server instances.

## Config

> src/conf

The complete required configuration is located at `src/conf`.

- bases: A list of base configuration files that can be included where needed.
- sites-available: A list of all configured servers; those will be inactive.
- sites-enabled: A list of all servers to be activated.
- upstreams: A list of all available upstreams for use in proxy_pass redirects.

### Installation

> Default directory: `/etc/nginx`.

### User

A new user `www` with the same name for a group is required and is used by the
server `worker` processes.

### SSL

Copy generated SSL certificates and keys.

> Default directory: `/etc/ssl/private`, `/etc/ssl/certs`

### Static Files

Copy generated static files to be served.

> Default directory: `/usr/share/nginx/html`.

## Bare Metal Instance

### Setup

- Get a copy of the latest stable release from the official
[download page](http://nginx.org/en/download.html).

- Check [OS](#os) section for the recommended Linux distribution; if running an
on-premise server, make sure to install the latest system and security updates
before moving forward.

- Refer to [config](#config) section for details on configuring the proxy and
server blocks.

## Docker Container Instance

Built container image uses 127.0.0.1 as server host and default instance ports;
Port mapping to the host machine is based on the values defined in the `.env`
file.

> Always use the host's IP address in configuration files instead of localhost
> to allow external access.

The required [config](#config) is automatically loaded and deployed on the server.

Run the following command from the root directory of this package to spin up a
new container (include --build flag if updating and existing container):

```shell
docker-compose up
```

No additional steps are needed.

### OS

`Debian 10 (buster)`

> command: cat /etc/os-release

### Services

This setup deploys the following service(s):

`proxy`

The main http server instance.

### Networks

This container requires a top-level bridge network named `main-network` to
connect to.

### Ports

| Service   | Protocol  | Container   | Host              |
|---        |---        |---          |---                |
| Nginx     | TCP       | $PROXY_PORT | $PROXY_PORT_HOST  |

### Volumes

`logs`

> volumes/logs:/etc/nginx/logs

Hosts proxy and server blocks access and error logs.

### Files

`html`

> build/html

All content stored in __build/html__ will be copied and included in the final
container image to be served as static files.
