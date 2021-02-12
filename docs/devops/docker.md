# Docker

## Commands

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

## Containers

### Shell access to container

```shell
docker exec -it <container> /bin/bash
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
