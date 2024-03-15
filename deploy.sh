#!/bin/bash

docker rmi -f ect:latest

docker build -t ect:latest .

kubectl apply -f k8s/configmap.yaml -n ect

kubectl apply -f k8s/deployment.yaml -n ect

kubectl apply -f k8s/service.yaml -n ect

kubectl delete pod -n ect -l app=backend