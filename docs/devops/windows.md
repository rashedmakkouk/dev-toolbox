# Windows

## OS

### Open Startup Folder

```cmd
shell:startup
```

### List processes

```cmd
netstat -a -b -o

netstat -ano | findstr :port

tasklist /fi "imagename eq process.exe"
```

### Delete processes

```cmd
taskkill /f /pid <pid>

taskkill /f /im <name>
```

## Filesystem

### Create symbolic link

```cmd
mklink link.txt c:\path\to\target\file.txt

mklink /d directory c:\path\to\target\directory
```

## Windows Subsystem for Linux (WSL)

### List available distros

```powershell
wsl --list --verbose
wsl --list --version
wsl --list --running
wsl -l --all
```

### Run a specific distro

```powershell
wsl -d <distro-name>
wsl --distribution <distro-name>
```

### Shutdown distros

Shutdown all running distros

```powershell
wsl --shutdown
```

Shutdown specific distros

```powershell
# To terminate/shutdown a specific distro
wsl -t <distro-name>
wsl --terminate <distro-name>
```

### Purge installed distro

```powershell
wsl --unregister <distro-name>
```

### User access

Run as specific user

```powershell
wsl -u <username>
wsl --user <username>
```

Change default user

```powershell
<distro-name> config --default-user <username>
```

### Set distro version

```powershell
wsl --set-version <distro-name> <version>
```

### Set default distro to run

```powershell
wsl -s <distro-name>
wsl --setdefault <distro-name>
```

### [Configure per distro launch settings](https://docs.microsoft.com/en-us/windows/wsl/wsl-config#configure-per-distro-launch-settings-with-wslconf)

> Additional steps or details will be listed below.

## Windows Terminal

> Run `wt.exe` or `wt` from any command line.

### Add icon to terminal profile

1. Copy transparent 32pxx32px PNG images to:

`%LOCALAPPDATA%\packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\RoamingState`

> This path can be accessed via `ms-appdata:///roaming`.

2. Goto Windows Terminal -> Settings

3. Add "icon" property under desired profile with value `ms-appdata:///roaming/image-name.png`.
