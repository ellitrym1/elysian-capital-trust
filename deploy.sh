#!/bin/bash

docker rmi -f sdb:latest

docker build -t sdb:latest .

kubectl apply -f k8s/deployment.yaml -n sdb

kubectl delete pod -n sdb -l app=backend