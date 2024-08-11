# USAGE

## Standalone KFP (from outside cluster)

When running outside the Kubernetes cluster, you may connect Pipelines SDK to the `ml-pipeline-ui`
service by using kubectl port-forwarding.

(**NOTE:** In standalone deployments of Kubeflow Pipelines, there is no authentication enforced on the
`ml-pipeline-ui` service.)

**Step 1:** run the following command on your external system to initiate port-forwarding:

```
# change `--namespace` if you deployed Kubeflow Pipelines into a different namespace
kubectl port-forward --namespace kubeflow svc/ml-pipeline-ui 3000:80
```

**Step 2:** the following code will create a kfp.Client() against your port-forwarded ml-pipeline-ui service:

```
import kfp

client = kfp.Client(host="http://localhost:3000")

print(client.list_experiments())
```
