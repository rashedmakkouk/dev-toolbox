# Windows

## COMMANDS

### Open Startup Folder

```cmd
shell:startup
```

### Manage Processes

List processes:

```cmd
netstat -a -b -o

tasklist /fi "imagename eq process.exe"
```

Delete processes:

```cmd
taskkill /f /pid <pid>

taskkill /f /im <name>
```

## SYSTEM FILE

### Create Symbolic Link

```cmd
mklink link.txt c:\path\to\target\file.txt

mklink /d directory c:\path\to\target\directory
```
