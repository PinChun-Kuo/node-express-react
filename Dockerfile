#FROM node:6.9.4
FROM postgres:9.4

MAINTAINER Chloe

# make sure apt is up to date
RUN apt-get update
RUN apt-get install sudo -y
RUN sudo apt-get install curl -y
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
ADD . /usr/project/issuetracker
RUN npm install

EXPOSE 3000
