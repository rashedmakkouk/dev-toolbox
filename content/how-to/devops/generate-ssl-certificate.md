---
title: Generate SSL Certificate
sidebar_label: Generate SSL Certificate
---

## Install `OpenSSL`

Download and install [OpenSSL binaries](https://wiki.openssl.org/index.php/Binaries).

> Recommended: [slproweb](https://slproweb.com/products/Win32OpenSSL.html)

## Generate SSL Certificate

### Generate `private` key

```shell
openssl genrsa -out <private>.pem 2048
```

### Extract `public` key

```shell
openssl rsa -in <private>.pem -pubout -out <public>.pem
```
