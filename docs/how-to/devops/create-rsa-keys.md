# Create RSA Keys

## Generate `private` key

```shell
openssl genrsa -out <private>.pem 2048
```

## Extract `public` key

```shell
openssl rsa -in <private>.pem -pubout -out <public>.pem
```
