# pull postgres image from docker hub https://hub.docker.com/_/postgres/
docker pull postgres

# create postgres container
docker run --name some-postgres -e POSTGRES_PASSWORD=12345678 -d postgres

# create issue_tracker container
docker build -t chloe/issue_tracker .

# link both of them
docker run -P --name issue_tracker -p 3000:3000 --link some-postgres:postgres -d chloe/issue_tracker
# docker run -it --rm --link postgres:postgres postgres:9.6 sh -c "exec psql -h \$POSTGRES_PORT_5432_TCP_ADDR -p \$POSTGRES_PORT_5432_TCP_PORT -U postgres"

# create database by postgres role and build code
#docker exec -u postgres -it issue_tracker /bin/bash
#createdb issueTracker

docker exec -it issue_tracker /bin/bash -c "createdb -U postgres issueTracker; npm run build"

# docker exec issue_tracker /bin/bash -c "createdb -U postgres issueTracker"
#docker exec -it issue_tracker /bin/bash -c "npm run build"

#createdb -U postgres issueTracker
#npm run build
