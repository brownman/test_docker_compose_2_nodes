test -f loggerservice/usage.log && rm -f loggerservice/usage.log
docker-compose up --build --remove-orphans
