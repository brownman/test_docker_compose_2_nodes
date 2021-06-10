
steps
-------

- Timerservice:
============
- dir: ~/exam/timerservice
- port: 8080

- API:
- get / => prints:
- Time is "...blah" GMT+0000  (UTC)

- post /log
- actively update loggerService with a new record


- “Loggerservice”
==========
- dir:
-- ~/exam/loggerservice
- port: 8081

API:
- POST /log
-- should keep record in a file + add some text
- GET /usage.log
-- will print the content the log file:
-? volume: 
--? ./usage.log




todo:
====
- refactor multi-stage build

