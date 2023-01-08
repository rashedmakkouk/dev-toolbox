---
title: Connect with SSH
sidebar_label: Connect with SSH
---

## Generate SSH Key

> ~/.ssh

Follow instructions at [Generate a new SSH key][generate-new-ssh-key].

```shell
$ ssh-keygen -t ed25519 -C "your_email@example.com"

Generating public/private ed25519 key pair.
```

Enter desired filename when prompted and avoid manually renaming files for successful authentication.

## Authentication

To use SSH keys to connect to online Git repository service providers, e.g. GitHub, follow the
official instructions to add your public key to your account.

- [Adding a new SSH key to your GitHub account][adding-ssh-key-to-github-account]
- [Add an SSH key to your GitLab account][add-ssh-key-to-gitlab-account]

### Configure `ssh-agent`

Additional steps might be required before you can successfully connect; check your online Git
repository service provider documentation for additional instructions.

- [Adding your SSH key to the `ssh-agent`][adding-ssh-key-to-ssh-agent]

To test if the configuration works and you can successfully get authenticated on GitHub, run the
following command:

```shell
ssh -T git@github.com
```

### Auto-launch `ssh-agent`

#### Mac OS

On Mac OS X, these default private key files are handled automatically; see
[Saving your passphrase in the keychain][saving-your-passphrase-in-the-keychain]
for more details.

#### Windows

`OpenSSH Authentication Agent Service`

Enable the service by setting the `Startup Type` to either `Automatic` or `Manual`. When the
service is `Disabled`, you might receive the following error:

```shell
unable to start ssh-agent service, error :1058
Error connecting to agent: No such file or directory
```

`SSH Server and Client`

Install `SSH Server` and `SSH Client` Optional Features; follow
[Getting Started with OpenSSH for Windows][getting-started-with-openssh-for-windows] for more details.

`Auto-launching SSH Agent`

Additional steps are needed to automate the process of launching the SSH agent, follow
[Auto-launching SSH Agent on Git for Windows][auto-launchig-ssh-agent-on-git-for-windows] for
instructions.

`Usage with Bash`

If you are using `bash` shell either as standalone or part of your IDE, you can find a custom
`.bashrc` script template [here](../../templates/ssh/ssh-agent.bashrc) that you can use to load
your SSH keys when running a new shell instance.

Add the script file to your system profile directory, typically at `%USERPROFILE%\` or `C:\Users\<username>`.

> Git provides a bash shell and can be downloaded [here][git-scm-downloads].

[generate-new-ssh-key]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key
[adding-ssh-key-to-github-account]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
[add-ssh-key-to-gitlab-account]: https://docs.gitlab.com/ee/ssh/#add-an-ssh-key-to-your-gitlab-account
[adding-ssh-key-to-ssh-agent]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent
[auto-launchig-ssh-agent-on-git-for-windows]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
[saving-your-passphrase-in-the-keychain]:https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain
[getting-started-with-openssh-for-windows]: https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse
[git-scm-downloads]: https://git-scm.com/downloads
