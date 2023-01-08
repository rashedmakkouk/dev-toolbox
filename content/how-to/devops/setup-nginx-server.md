---
title: Setup Nginx Server
sidebar_label: Setup Nginx Server
---

Setup a proxy server, a load balancer and a reverse proxy based on [Nginx][Nginx].

## Installation

Get a copy of the latest stable release from the [official download page][Nginx].

> Default directory - Linux: `/etc/nginx`.\
> Default directory - Windows: `X:/nginx`.

You can find a sample get started template [here](../../templates/index.md#nginx-server) along with
predefined minimum configuration.

## Configuration

### conf

> conf/nginx.conf

Nginx root configuration file.

`user`

Provide a user, e.g. `www`, without sudo priviliges and a group with the same name to be used by
the server `worker` processes.

### Bases

> conf/bases

Includes Nginx root and server block configuration following best practices from Nginx and the
community.

A base file is a way to centralize common and reusable configurations.

### Upstreams

> conf/upstreams

Defined list of `host`s available to proxy requests and for load balancing; upstreams are loaded in
server blocks by configuring `proxy_pass` key within a `location`.

### Sites

List of server blocks used to listen to and proxy incoming requests. Sites are loaded in Nginx
root [config](#conf) file.

> conf/sites-available: Inactive

`domain.com.conf`

A server block template suitable for use in production environments.

`http-to-https.conf`

A server block to redirect non-https connections to https.

`non-to-www.conf`

A server block to redirect root domain connections to www.

> conf/sites-enabled: Active

`sites-enabled/domain.dev.conf`

A server block template suitable for use in development environments.

### SSL

To serve secure connections over HTTPS, SSL certificates and keys should be generated; update
server block `ssl_certificate` and `ssl_certificate_key` paths as needed.

> Default directory: `/etc/ssl/private`, `/etc/ssl/certs`.

### Static Files

To serve static files, update [sites-enabled](#sites) server block `location/root` key to point to
the stored static files location path.

> Default directory - Linux: `/usr/share/nginx/html`.\
> Default directory - Windows: `X:/nginx/html`.

[Nginx]: http://nginx.org/en/download.html
