while true; do curl "http://localhost:8080/";echo -n "."; sleep 5; done

# echo ---
# docker inspect --format "{{json .State.Health }}" timerservice | jq
# echo ===
# docker inspect --format "{{json .State.Health }}" loggerservice | jq
