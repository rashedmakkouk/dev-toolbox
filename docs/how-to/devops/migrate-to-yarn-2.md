# Migrate to Yarn 2

> [Getting Started](https://yarnpkg.com/getting-started/migration)

## Installation

```shell
npm install -g yarn
```

## Migration

> [.gitignore](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

1. Inside a project directory:

```shell
yarn set version berry
```

2. Create a `yarnrc.yml` file.

> [Configuration](https://yarnpkg.com/configuration/yarnrc#nodeLinker)

```yaml
nodeLinker: "node-modules"
```

3. Run `yarn install` to migrate/create `lockfile`.

## Upgrade

```shell
yarn set version latest
```
