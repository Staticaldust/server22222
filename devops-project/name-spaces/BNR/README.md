# check the avaliable clusters:

kubectl config get-contexts

# move to the aws

kubectl config use-context arn:aws:eks:eu-central-1:644435390668:cluster/webiks-cluster-3

# creating name space

1. kubectl create namespace bnr

###### move to the correct directory

cd <l????>

# creating the resources inside the namespace

2.  kubectl apply --namespace=bnr -f BNR/

# creating the helm-chart resources inside the name

3.

# connect to bitnami

git clone https://github.com/bitnami/charts.git

# postgress

helm install my-postgress-release bitnami/postgresql -f values-postgress.yaml -n bnr

# mongodb

helm install my-mongodb-release bitnami/mongodb -f values-mongodb.yaml -n bnr 7. apiVersion: v1
kind: ConfigMap
metadata:
name: bnr-server-configmap
namespace: bnr
data:
APP_ENV: "production"
LOG_LEVEL: "info"

# add the env inside container in the env form

8.

- configMapRef:
  name: nodejs-configmap

# create value.yml for mongodb
