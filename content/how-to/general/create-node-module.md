---
title: Create Node Module
sidebar_label: Create Node Module
---

Directory structure for building node packages.

`lib` intended for code that can run as-is.

`src` intended for code that needs to be manipulated before it can be used.

`build` intended for any scripts or tooling needed to build the project.

`dist` intended for compiled modules that can be used with other systems.

`bin` intended for any executable scripts, compiled binaries used with, or\
built from your module.

`test` intended for all of the project/module's test scripts.

`unit` a sub-directory for unit tests.

`integration` a sub-directory for integration tests.

`env` intended for any environment that's needed for testing.
