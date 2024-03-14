#!/bin/bash

kubectl apply -f k8s/postgres/pg-configmap.yaml -n sdb

kubectl apply -f k8s/postgres/pvc.yaml -n sdb

kubectl apply -f k8s/postgres/pg-deployment.yaml -n sdb

kubectl apply -f k8s/postgres/pg-service.yaml -n sdb

kubectl delete pod -n sdb -l app=postgres