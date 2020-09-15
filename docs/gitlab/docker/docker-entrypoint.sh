#!/bin/bash

echo "Running apt-get & installing additional packages"

apt-get update \
	&& apt-get install -y cron

echo "Copying cron jobs files"

#COPY cron /var/spool/cron/

exec "$@"
