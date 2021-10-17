---
title: Connect with SSH
sidebar_label: Connect with SSH
---

## Generate SSH Key

> ~/.ssh

Follow instructions at [Generate a new SSH key][generate-new-ssh-key].

```shell
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```

Enter desired filename when prompted and avoid manually renaming files for successful authentication.

## Authentication

To use SSH keys to connect to online Git repository service providers, e.g. GitHub, follow the
official instructions to add your public key to your account.

- [Adding a new SSH key to your GitHub account][adding-ssh-key-to-github-account]
- [Add an SSH key to your GitLab account][add-ssh-key-to-gitlab-account]

### Configure `ssh-agent`

Additional steps might be required before you can successfully connect; check your online Git
repository service provider documentations for additional instructions.

- [Adding your SSH key to the `ssh-agent`][adding-ssh-key-to-ssh-agent]

### Auto-launch `ssh-agent`

#### Mac OS

On Mac OS X, these default private key files are handled automatically; see [Saving your passphrase in the keychain][saving-your-passphrase-in-the-keychain]
for more details.

#### Windows

On Windows, additional steps are needed to automate the process; follow these documented [instructions][auto-launchig-ssh-agent-on-git-for-windows].

> Custom `.bashrc` config file template can be found [here](../../templates/bash/ssh-agent.bashrc).

[generate-new-ssh-key]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key
[add-ssh-key-to-ssh-agent]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent
[adding-ssh-key-to-github-account]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
[add-ssh-key-to-gitlab-account]: https://docs.gitlab.com/ee/ssh/#add-an-ssh-key-to-your-gitlab-account
[adding-ssh-key-to-ssh-agent]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent
[auto-launchig-ssh-agent-on-git-for-windows]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
[saving-your-passphrase-in-the-keychain]:https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain