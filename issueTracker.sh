# pull postgres image from docker hub https://hub.docker.com/_/postgres/
docker pull postgres

# create postgres container
docker run --name some-postgres -e POSTGRES_PASSWORD=12345678 -d postgres

# create issue_tracker container
docker build -t chloe/issue_tracker .

# link both of them and create database by postgres role first
docker run -P --name issue_tracker -p 3000:3000 --link some-postgres:postgres -e POSTGRES_DB=issueTracker -d chloe/issue_tracker

#  build code
docker exec -it issue_tracker /bin/bash -c "npm run build"
