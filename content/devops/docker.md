---
title: Docker
sidebar_label: Docker
---

## Commands

### Create a `user-defined` network

```shell
docker network create --driver bridge <network-name>
```

To remove a network:

```shell
docker network rm <network-name>
```

### Start container & force rebuild

```shell
docker-compose up --build <service>
```

### Manage service state

```shell
docker start <service>
docker stop <service>

docker rm <service>
docker rm -f <service>
```

### Get container details

```shell
docker inspect -f
```

## Images

### Image prune

```shell
docker image prune --filter="label=deprecated"
docker image prune --filter="label!=down=deprecated"
```

## Containers

### Shell access to container

`Debian`

```shell
docker exec -it <container> /bin/bash
```

`Alpine`

```shell
docker exec -it --user root <container> sh
```

### Copy file between host & container

```shell
docker cp <container>:/path/to/file.ext .
docker cp ./file.ext <container>:/path/to/file.ext
```

## Containers - MySQL

### Connect to database instance

```shell
mysql -u root -p
```

### Create new database user

```mysql
CREATE USER 'username'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL ON *.* TO 'username'@'%';
FLUSH PRIVILIGES;
```

### Export database dump file

```shell
docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql
```

### Restore database dump file

```shell
docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE < backup.sql
```

## docker-compose.yml

### extends

`services`

Service properties can be overriden in the location that it was extended in.

`env_file`

Respective `.env` file is loaded from the context in which `docker-compose` command is run. If a service is extended, properties defined in its own `.env` file, must also be defined in the `.env` file where it is extended.

`networks`

Any defined networks is an extended service must also live where it was extended.

### Define top-level variables

```yaml
dev.database-env:
	KEY: value

services:
	service-name:
		environment:
			<<: *database-env
```
