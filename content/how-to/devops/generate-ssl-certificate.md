---
title: Generate SSH Keys
sidebar_label: Generate SSL Keys
---

## Install `OpenSSL`

Download and install [OpenSSL binaries](https://wiki.openssl.org/index.php/Binaries).

## Generate SSL Certificate

### Generate `private` key

```shell
openssl genrsa -out <private>.pem 2048
```

### Extract `public` key

```shell
openssl rsa -in <private>.pem -pubout -out <public>.pem
```
