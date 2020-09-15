#!/bin/bash
#docker cp ./cron gitlab:/etc/spool/cron

winpty docker exec gitlab bash -c "
	apt-get update;
	apt-get install -y cron;
"

exec bash
