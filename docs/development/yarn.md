# Yarn

## COMMANDS

### Run `package.json` script from a different path

```shell
yarn --cwd <path> <command>
```

### Yarn 2

```shell
yarn up
yarn add
yarn remove
yarn plugin list
```

#### [Plugins](https://yarnpkg.com/api/index.html)

```shell
yarn plugin import <name>
```

- [@yarnpkg/plugin-interactive-tools](https://yarnpkg.com/api/modules/plugin_interactive_tools.html)

```shell
yarn upgrade-interactive
```

- [@yarnpkg/plugin-workspace-tools](https://yarnpkg.com/api/modules/plugin_workspace_tools.html)

```shell
yarn workspaces foreach run build
```

## WORKSPACES

### Add dependency to root repo

```shell
yarn add <package> [--dev] -W
```

### Add dependency to specific `workspace`

```shell
yarn workspace <workspace> add <package> [--dev]
```
