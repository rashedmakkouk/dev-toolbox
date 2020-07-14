# Gitlab

## [Configuration Settings][gitlab-rb-template]
> /etc/gitlab.rb
> Run `gitlab-ctl stop` command when making changes and prior to executing `gitlab-ctl reconfigre` command to commit changes.

### Nginx config
> /var/opt/gitlab/nginx/conf/nginx.conf
```
nginx['custom_nginx_config'] = "include /etc/nginx/conf.d/*.conf;"
```

### Nginx server block [custom_gitlab_server_config.conf][custom-nginx-settings]
```
nginx['custom_gitlab_server_config'] = "include /etc/gitlab/custom_gitlab_server_config.conf;"
nginx['custom_gitlab_server_config'] = "location ^~ /foo-namespace/bar-project/raw/ {\n deny all;\n}\n"
```

### Allow/deny access
> /var/opt/gitlab/nginx/conf/gitlab-http.conf
```
allow 192.168.1.1/24;
deny all;

location ~ /.well-known {
    allow all;
}
```

### Instance access settings

```
external_url 'hostname'
nginx['listen_port'] = 80
nginx['redirect_http_to_https'] = false
nginx['listen_https'] = false
gitlab_rails['gitlab_shell_ssh_port'] = 22
```

### Instance settings
```
redis['tcp_keepalive'] = '300'
nginx['gzip_enabled'] = true
```

### Backup settings
```
gitlab_rails['backup_archive_permissions'] = 0644
gitlab_rails['backup_path'] = '/var/opt/gitlab/backups'
gitlab_rails['backup_upload_connection'] = {
	:provider => 'Local',
	:local_root => '/var/backups'
}
```

`gitlab_rails['gitlab_default_projects_features_builds'] = false` [^3]\
`gitlab_rails['backup_upload_remote_directory'] = '.'` [^1]\
`gitlab_rails['manage_backup_path'] = true` [^4]\
`gitlab_rails['backup_keep_time'] = 604800` [^2]

### Info and References
[^1]: Sub-directory local_root or use . for root.
[^2]: Limit backup lifetime to 7 days - 604800 seconds.
[^3]: Disable CI/CD site-wide.
[^4]: When modifying `backup_path`, set `manage_backup_path` configuration to `false`.

[gitlab-rb-template]: https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template "gitlab.rb.template"
[custom-nginx-settings]: https://docs.gitlab.com/omnibus/settings/nginx.html#inserting-custom-nginx-settings-into-the-gitlab-server-block "Insert Custom Nginx settings to GitLab server block"
