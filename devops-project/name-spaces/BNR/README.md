# creating name space

1. kubectl create namespace bnr

# creating the resources inside the namespace

2. kubectl apply -f ???.yaml --namespace=bnr

# creating the helm-chart resources inside the name

3. kubectl config set-context --current --namespace=bnr
4. helm install my-mongodb-release bitnami/mongodb \
   --namespace=bnr \
   --set architecture="replicaset" \
   --set replicaSet.enabled=true \
   --set replicaSet.name=my-replicaset \
   --set mongodbRootPassword=<root-password> \
   --set mongodbUsername=<user> \
   --set mongodbPassword=<password> \
   --set mongodbDatabase=<database>

# save the password as secret resource

5.  apiVersion: v1
    kind: Secret
    metadata:
    namespace: bnr
    name: bnr-server-secret
    type: Opaque
    stringData:
    MONGODB_USERNAME: "<user-name>"
    MONGODB_PASSWORD: "<password>"

# add the secret inside container

6.  envFrom:

- secretRef:
  name: bnr-server-secret

# adding vareable of the corrent env

7.  apiVersion: v1
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
