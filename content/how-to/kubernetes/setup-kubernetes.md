---
title: Setup Kubernetes
sidebar_label: Setup Kubernetes
---

> [Getting Started](https://kubernetes.io/docs/setup)

## Drivers

### Hyper-V

1. Enable Microsoft Hyper-V:

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

2. [Create Virtual Switch](https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/get-started/create-a-virtual-switch-for-hyper-v-virtual-machines)

## Cluster

### Runtime configuration

```terminal
kubectl version
```

`options`

```terminal
--hyperv-virtual-switch=<external-switch-name>
--driver=hyperv|docker|virtualbox
```

`container-runtime`

```terminal
minikube config set container-runtime=docker|containerd|cri-o
```

`driver`

```terminal
minikube config set driver hyperv|docker|virtualbox
```

### Manage instance

`commands`

```terminal
minikube start
minikube stop
minikube delete

kubectl cluster-info
minikube dashboard
```

## kubectl

### Retrieve pod deployment auto-generated status data

```terminal
kubectl get deployment <service-name> -o yaml > service-deployment-etcd.yaml
```

### Manage components

Namespaces:

```terminal
kubectl create namespace <name>
kubectl delete namespace <name>
```

All:

```terminal
kubectl get all -n <namespace>
kubectl get po -A
kubectl get all
kubectl get pods --output wide
kubectl get pods --watch
kubectl get pods --show-labels
kubectl get service
kubectl get rs
```

### Manage configuration files

```terminal
kubectl apply -f <name>.yaml
kubectl delete -f <name>.yaml
```

Apply all configuration files in a directory:

```terminal
kubectl apply $(ls pattern*.yaml | awk ' { print " -f " $1 } ')
```

```terminal
kubectl delete services <name> <another-name>
kubectl delete deployment <name> <another-name>
```

Create `base64` values for use in `secret` files

```terminal
echo -n 'value' | base64
```

### Manage deployments

Update a deployment:

```terminal
kubectl edit deployment.v1.apps/name-deployment
```

```terminal
kubectl get deployments
kubectl rollout status deployment/name-deployment

kubectl describe deployments
kubectl describe po -n <namespace> <pod-name>
kubectl describe pod <name>
```

## Setup Addons

### [Setup Ingress Nginx](./setup-ingress-nginx.md)
