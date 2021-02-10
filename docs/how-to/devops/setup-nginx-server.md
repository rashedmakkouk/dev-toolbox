# Setup Nginx Server

> See full configuration [examples](../../devops/nginx).

## `bases`

Hosts common configuration of server blocks, upstreams or any other feature.

> Use `include path/to/bases/file.conf` to add base files in respective blocks.

## `sites-available`

Server blocks custom configuration files by domain.

## `sites-enabled`

List of activated server blocks as symbolic links to `sites-available`.

> Use `include` to add site to root Nginx config file under `http` block.

> How to create symbolic links on [Linux](../../devops/linux.md#create-symbolic-link) [Windows](../../devops/windows.md#create-symbolic-link).

## `upstreams`

List of available upstreams that can be as `proxy_pass` in any number of server blocks.

> Use `include` to add site to root Nginx config file under `http` block.
