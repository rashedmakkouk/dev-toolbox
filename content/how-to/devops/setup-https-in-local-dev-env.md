---
title: Setup Https in Local Dev Env
sidebar_label: Setup Https in Local Dev Env
---

> Ref.: [How to get HTTPS working on your local development environment in 5 minutes](https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec)

## Install `OpenSSL`

Download and install [OpenSSL binaries](https://wiki.openssl.org/index.php/Binaries)

## Create root SSL certificate

1. Generate root key

> Root keys are used to create root certificates.

```shell
openssl genrsa -des3 -out rootCA.key 2048
```

> Remove `-des3` for non password-protected keys.

2. Create root SSL certificate

> Root certificates are used to sign individual domains' certificates.

```shell
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem
```

## Trust root SSL certificate

Configure the operating system to trust the root certificate and all signed certificates.

`Windows`

- Run `mmc.exe` from command prompt.
- File -> Add/Remove Snap-in.
- Select `Certificates` under `Available snap-ins` and click `Add`; click `Next`.
- Select `Computer account`; click `Next`.
- Select `Local computer`; click `Finish`.
- In `MMC` console, expand `Certificates (Local computer)` node.
- Right click on `Trusted Root Certification Authorities` and click on `All Tasks` -> `Import`.
- Follow the wizard instructions to complete the process.

`macOS`

- Go to `Keychain Access` -> `Certificates`.
- File -> Import Items -> `rootCA.pem`.
- Double click on the imported certificate:
  Select `Always Trust` under `When using this certificate:` dropdown -> `Trust` section.

## Create domain SSL certificate

1. Create a new `OpenSSL` configuration file `server.csr.cnf`

> Configuration files can be used to load stored settings when signing new certificates; can also be done via the command line.

```telnet
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn

[dn]
C=US
ST=RandomState
L=RandomCity
O=RandomOrganization
OU=RandomOrganizationUnit
emailAddress=hello@example.com
CN = localhost
```

2. Create a `v3.ext` file in order to create a `X509 v3` certificate

```ascii
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
```

3. Create a certificate key for localhost

```shell
openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key -config <( cat server.csr.cnf )
```

A certificate signing request is issued via the root SSL certificate created earlier to create a
domain certificate for `localhost`.

The output is a certificate file called `server.crt`.

```shell
openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext
```

Output files used to load i Node.js server:
server.key
server.crt
