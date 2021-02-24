# Debian 10 (buster)
FROM  nginx:latest

LABEL package=@limo/proxy-server \
      version=0.2.0

ARG DEBIAN_FRONTEND=noninteractive

ARG SRC_DIR=./src
ARG BUILD_DIR=./build

# Default www directory as defined in container
ARG HTML_DIR=/usr/share/nginx/html

# Root directory
WORKDIR /etc/nginx

RUN export PATH="$PATH:/usr/sbin:/usr/bin"

# Updates and installs system packages
RUN apt-get update && \
    apt-get install -y \
    curl
    
# Installs utility packages
RUN apt-get install -y \
    nano
    # Add here packages to install

# Creates system user and group
RUN useradd \
    --comment "Nginx worker processes account; non-interactive." \
    # System account
    --system \
    # Disable shell access
    --shell /bin/false \
    # Creates a user group with the same name and adds the user to it
    --user-group \
    # Sets user home directory custom name
    --home /nonexistent \
    # User home directory inaccessible
    -M \
    # The user name
    www

# Copies server custom configuration files
COPY $SRC_DIR/conf/ ./

# Copies SSL certification and key files
COPY $SRC_DIR/ssl/*.crt /etc/ssl/certs/
COPY $SRC_DIR/ssl/*.key /etc/ssl/private/

# Copies static files to be served
COPY $BUILD_DIR/html/ $HTML_DIR/

# Cleans up system packages list and tmp directory
RUN rm -rf \
    /var/lib/apt/lists/* \
    /tmp/*