# Nginx

## nginx.conf

```nginx
#user                               nobody;
worker_processes                    4;

#error_log                          C:/nginx/logs/error.log;
#error_log                          logs/error.log  notice;
#error_log                          logs/error.log  info;
#pid                                C:/nginx/logs/nginx.pid;

events {
    worker_connections              1024;
}

http {
    include                         mime.types;
    default_type                    application/octet-stream;
	
    client_max_body_size            4M;
    client_body_buffer_size         128k;
	
    ssl_session_cache               shared:SSL:10m;
    ssl_session_timeout             10m;
		
    sendfile                        on;
    #tcp_nopush                     on;

    keepalive_timeout               60;
    gzip                            on;
	
    #access_log                     logs/access.log  main;

    include sites-enabled/upstream.conf;
		
    include sites-enabled/domain.conf;
    #include sites-enabled/subdomain.conf;
}

```

## upstream.conf

```nginx
upstream servers {
    least_conn;
    server xxx.xxx.xxx.xxx:3001;
    keepalive 64;
}
```

## server_block.conf

```nginx
server {
    listen 80;
	
    server_name xxx.xxx.xxx.xxx *.domain.com;
	
    #return 301 https://$server_name$request_uri;
	
    location /  {
        #add_header 'Access-Control-Allow-Origin' '*';

        include sites-enabled/server_block_defaults.conf;
    }
	
    location /docs {
        root c:/Nginx/html;
        index index.html;
	
        try_files $uri $uri/ =404;
    }
}

server {
    listen 443 ssl;
	
    server_name xxx.xxx.xxx.xxx *.domain.com;
	
    ## CERTS
    ssl_certificate SSL/server.crt;
    ssl_certificate_key SSL/server.key;

    ## CONFIGURATION
    ssl_prefer_server_ciphers       on;
    ssl_protocols                   TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers                     HIGH:!aNULL:!MD5;
    ssl_verify_depth                2;
	
    ## LOGS
    #access_log /var/log/nginx/ssl-access.log;
    #error_log /var/log/nginx/ssl-error.log;

    location / {
        include sites-enabled/server_block_defaults.conf;
    }
}
```

## server_block_defaults.conf

```nginx
proxy_set_header                    X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header                    X-Forwarded-Proto $scheme;
proxy_set_header                    X-Real-IP $remote_addr;
proxy_set_header                    Host $host;

proxy_http_version                  1.1;
proxy_set_header                    Upgrade $http_upgrade;
proxy_set_header                    Connection "upgrade";

proxy_set_header                    X-NginX-Proxy true;

proxy_cache_bypass                  $http_upgrade;

proxy_pass                          http://servers/;
proxy_redirect                      off;

proxy_connect_timeout               90;
proxy_send_timeout                  90;
proxy_read_timeout                  240;

proxy_buffer_size                   4k;
proxy_buffers                       4 32k;
#proxy_busy_buffers_size            64k;
```
