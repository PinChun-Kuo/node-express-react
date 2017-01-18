# check whether postgres image already exist or not
if [ "`docker images postgres:latest | grep postgres -c -F`" == 1 ]; then
  echo 'Latest postgres images already exists.'
else
  echo 'Pull latest postgres images.'
  # pull latest postgres image from docker hub https://hub.docker.com/_/postgres/
  docker pull postgres
fi

# check whether postgres container already exist or not
if [ "`docker ps -a | grep issue_postgres -c -F`" == 1 ]; then
  if [ "`docker ps | grep issue_postgres -c -F`" == 1 ]; then
    echo 'Postgres container for issue already exists and started.'
  else
    echo 'Postgres container for issue already exists but not started.'
    docker start issue_postgres
  fi
else
  echo 'Create postgres container for issue.'
  # create postgres container
  docker run --name issue_postgres -e POSTGRES_PASSWORD=12345678 -d postgres
fi

# link both of them and create database by postgres role first
docker run -P --name issue_tracker -p 3000:3000 --link issue_postgres:postgres -e POSTGRES_DB=issueTracker -d chloe/issue_tracker
#docker run -P --name issue_tracker -v ./: /usr/project/issuetracker -p 3000:3000 --link issue-postgres:postgres -e POSTGRES_DB=issueTracker -d chloe/issue_tracker

# start the server
docker exec -it issue_tracker /bin/bash -c "npm run start"
