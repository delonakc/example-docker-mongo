#!/bin/bash

mongod -f /mongod.conf --smallfiles &

echo 'waiting mongod start ...'
sleep 10

mongo < ./init.ms && mongoimport  -d delonakc -c articles --mode insert --file ./delonakc.json