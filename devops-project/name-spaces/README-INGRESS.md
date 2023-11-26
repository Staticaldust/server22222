#

kubectl apply -k "github.com/aws/eks-charts/stable/aws-load-balancer-controller//crds?ref=master"
eksctl create iamserviceaccount \
 --region eu-central-1 \
 --name aws-load-balancer-controller \
 --namespace kube-system \
 --cluster arn:aws:eks:eu-central-1:644435390668:cluster/webiks-cluster-3 \
 --attach-policy-arn arn:aws:iam::aws:policy/eks:AmazonEKS_CNI_Policy \
 --approve
kubectl apply -k "github.com/aws/eks-charts/stable/aws-load-balancer-controller//crds?ref=master"
helm repo add eks https://aws.github.io/eks-charts
helm upgrade -i aws-load-balancer-controller eks/aws-load-balancer-controller \
 --set clusterName=arn:aws:eks:eu-central-1:644435390668:cluster/webiks-cluster-3 \
 --set serviceAccount.create=false \
 --set serviceAccount.name=aws-load-balancer-controller \
 --set region=eu-central-1
