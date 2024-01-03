#!/bin/bash -e

# this installs the prerequisites for this project, on ubuntu

# first lets update the machine
sudo apt update
sudo apt dist-upgrade

# lets install stuff we need
sudo apt install docker.io
sudo apt install docker-compose
sudo /usr/sbin/adduser ubuntu docker

# now you need to logout and login, and see that the output of the command "groups"
# has "docker" in it.
# now you need to go to backend and run ./compose_build.sh
# now, again in backend, run ./compose_up.sh
# see the status with ./compose_status.sh
# to see the site from the world you must open your port 80 to the world.