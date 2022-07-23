#!/usr/bin/env bash

docker kill | xargs --no-run-if-empty $(docker ps -aq)