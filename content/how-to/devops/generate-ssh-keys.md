---
title: Generate SSH Keys
sidebar_label: Generate SSH Keys
---

## Install `OpenSSL`

Download and install [OpenSSL binaries](https://wiki.openssl.org/index.php/Binaries).

## Generate SSH Key

[Generate a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Generate `private` key

```shell
openssl genrsa -out <private>.pem 2048
```

### Extract `public` key

```shell
openssl rsa -in <private>.pem -pubout -out <public>.pem
```
