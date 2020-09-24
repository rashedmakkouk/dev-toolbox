# Gitlab - Config


### SSH files

> /etc/ssh

> [Copy SSH keys from one server to another server](https://superuser.com/questions/532040/copy-ssh-keys-from-one-server-to-another-server/532079#532079)

## [CONFIG TEMPLATE][gitlab-rb-template]

> /etc/gitlab.rb

> Stop GitLab services by executing `gitlab-ctl stop` command before making and saving changes.\
> Execute `gitlab-ctl reconfigre` command to commit changes.

## [OMNIBUS CONFIG README][omnibus-gitlab-readme]

## NGINX

### Config file

> /var/opt/gitlab/nginx/conf/nginx.conf

```ascii
nginx['custom_nginx_config'] = "include /etc/nginx/conf.d/*.conf;"
```

### Server block [custom_gitlab_server_config.conf][custom-nginx-settings]

```ascii
nginx['custom_gitlab_server_config'] = "include /etc/gitlab/custom_gitlab_server_config.conf;"
nginx['custom_gitlab_server_config'] = "location ^~ /foo-namespace/bar-project/raw/ {\n deny all;\n}\n"
```

### Allow/deny access

> /var/opt/gitlab/nginx/conf/gitlab-http.conf

```ascii
allow 192.168.1.1/24;
deny all;

location ~ /.well-known {
    allow all;
}
```

### Instance access settings

```ascii
external_url 'hostname'
nginx['listen_port'] = 80
nginx['redirect_http_to_https'] = false
nginx['listen_https'] = false
gitlab_rails['gitlab_shell_ssh_port'] = 22
```

### Instance settings
```ascii
redis['tcp_keepalive'] = '300'
nginx['gzip_enabled'] = true
gitlab_rails['gitlab_default_projects_features_builds'] = false
```

### Backup settings
```ascii
gitlab_rails['backup_archive_permissions'] = 0644
gitlab_rails['backup_path'] = '/var/opt/gitlab/backups'
gitlab_rails['backup_upload_connection'] = {
	:provider => 'Local',
	:local_root => '/var/backups'
}
gitlab_rails['backup_upload_remote_directory'] = '.'
gitlab_rails['backup_keep_time'] = 604800
```

`backup_upload_remote_directory` [^1]\
`backup_keep_time` [^2]\
`manage_backup_path` [^3]\
`gitlab_default_projects_features_builds` [^4]

### Info and References
[^1]: Sub-directory local_root or use . for root.
[^2]: Limit backup lifetime to 7 days - 604800 seconds.
[^4]: Disable CI/CD site-wide.
[^3]: When modifying `backup_path`, set `manage_backup_path` configuration to `false`.

[gitlab-rb-template]: https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template "gitlab.rb.template"
[custom-nginx-settings]: https://docs.gitlab.com/omnibus/settings/nginx.html#inserting-custom-nginx-settings-into-the-gitlab-server-block "Insert Custom Nginx settings to GitLab server block"
[omnibus-gitlab-readme]: https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/README.md
