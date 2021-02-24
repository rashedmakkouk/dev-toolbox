---
title: Install Windows Subsystem for Linux
sidebar_label: Install Windows Subsystem for Linux
---

Check out the official [Manual Installation Steps](https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps) guide.

> Addititional steps to get the whole experience are explained below.

## Distributations

Goto [Microsoft Store](https://aka.ms/wslstore) for a list of available Linux distributions flavors to download.

## IDE

### Visual Studio Code

To use Visual Studio Code in WSL distros, make sure to add VS Code to system `PATH`.

#### Environment Variables

On `Windows`

This PC\
 -> Properties\
 -> Advanced system settings\
 -> Advanced\
 -> Environment Variables\
 -> System Variables\
 -> Path

Add new entry `%LOCALAPPDATA%\Programs\Microsoft VS Code\bin`

On `Linux`

Follow [Windows as a Linux developer machine](https://code.visualstudio.com/docs/setup/linux#_windows-as-a-linux-developer-machine) official guide.

On `macOS`

Follow [Launching from the command line](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) official guide.

> Run `code .` command inside a development directory from any WSL terminal and you should see `Installing VS Code Server for x64` message.

#### Extensions

- [ms-vscode-remote.vscode-remote-extensionpack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

## Containers

- [Using Remote Containers in WSL 2](https://code.visualstudio.com/blogs/2020/07/01/containers-wsl#_open-vs-code-in-wsl-2)

## Troubleshooting installation

- [Related errors](https://docs.microsoft.com/en-us/windows/wsl/install-win10#troubleshooting-installation)
- [WSL troubleshooting page](https://docs.microsoft.com/en-us/windows/wsl/troubleshooting)

## What's Next

Head over to [Windows](../../devops/windows.md) documentation under DevOps section for more usage instructions and details.
