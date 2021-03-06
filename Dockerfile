FROM postgres:latest

MAINTAINER Chloe

ARG NODE_ENV

# make sure apt is up to date
RUN apt-get update
RUN apt-get install sudo -y
RUN apt-get install curl -y
RUN apt-get install -y --no-install-recommends apt-utils

# Install npm and nodejs
RUN apt-get install python-software-properties -y
RUN apt-get install npm -y
RUN curl -SL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install nodejs -y

# Create project directory
RUN mkdir -p /usr/project/issuetracker
WORKDIR /usr/project/issuetracker

# Install project dependencies
ADD ./build.sh /usr/project/issuetracker
RUN /bin/bash -c "./build.sh"

EXPOSE 3000
