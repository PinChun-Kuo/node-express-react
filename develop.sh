# check whether postgres image already exist or not
if [ "`docker images postgres:latest | grep postgres -c -F`" == 1 ]; then
  echo 'Latest postgres images already exists.'
else
  echo 'Pull latest postgres images.'
  # pull latest postgres image from docker hub https://hub.docker.com/_/postgres/
  docker pull postgres
fi

# check whether postgres container already exist or not
if [ "`docker ps -a | grep issue_postgres_dev -c -F`" == 1 ]; then
  if [ "`docker ps | grep issue_postgres_dev -c -F`" == 1 ]; then
    echo 'Postgres container for issue already exists and started.'
  else
    echo 'Postgres container for issue already exists but not started.'
    docker start issue_postgres_dev
  fi
else
  echo 'Create postgres container for issue.'
  # create postgres container
  docker run --name issue_postgres_dev -e POSTGRES_PASSWORD=12345678 -d postgres
fi

# link both of them and create database by postgres role first
docker run -P -v /Users/pinchun.kuo/Desktop/node-express-react:/usr/project/issuetracker --name issue_tracker_dev -p 3000:3000 --link issue_postgres_dev:postgres -e POSTGRES_DB=issueTrackerTest -d chloe/issue_tracker_dev

# start the server
docker exec -it issue_tracker_dev /bin/bash -c "npm run dev-backend"
