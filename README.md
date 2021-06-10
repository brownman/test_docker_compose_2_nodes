
steps
-------
- mission:  code and orchestrate 2 web servers 
- technlogy used: node.js and docker-compose
- general flow:  for each request to : / the Timerservice sends a new log to Loggerservice


service requirements:
---

Timerservice:
---
- dir: timerservice
- port: 8080

API:
----
- get /
- prints: Time is <time> GMT+0000  (UTC)
  
- inner flow:
- send logs(The data is similar to the clock value) to Loggerservice ( at: /log)



Loggerservice
-----------
- dir: loggerservice
- port: 8081
- log file: ./usage.log

API:
---
- POST /log
- should keep record in a log file

- GET /usage.log
- will print the content the log file


how to run ?
---- 
- run `./start.sh`