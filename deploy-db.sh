#!/bin/bash

kubectl apply -f k8s/postgres/pg-configmap.yaml -n ect

kubectl apply -f k8s/postgres/pvc.yaml -n ect

kubectl apply -f k8s/postgres/pg-deployment.yaml -n ect

kubectl apply -f k8s/postgres/pg-service.yaml -n ect

kubectl delete pod -n ect -l app=postgres