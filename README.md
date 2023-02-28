# Imperio Linode Services

### Aim

Imperio Linode Services is service meant to proc desired terraform deployments based on incoming requests.

### Functional Testing
Since this is a deployment application, there are two ways to test changes:

* Perform fake api calls into the app (considering k8s networking and secrets, tls can be skipped with  localhost tunneling)
* Use terraform cli to apply changes and see how app reacts.

Localhost tests
1. Make sure nodemon is intalled by `npm install -g nodemon`
2. Make sure local libraries are fetched `npm i`
3. Use `npm run-script serve` to start app. Follow [package.json](package.json) for exact command if needed.
4. In case of `File not found` like errors, this is 99% a config issue due to cloud envs difference.

Terraform tests
1. Make sure terraform is accessible. This is located in [bin/terraform](bin/terraform) but feel free to use installer
2. cd into terraform folders and hit deployment steps except for init.


Tests via Skaffold.

1. Run docker, and kubernetes cluster and have it configured in/ ~/.kube/config. Rancher desktop is recommended as it runs both. Important note, is to have Traefik disabled here.

2. Change [application.yml](src/main/resources/application.yml) to match current infrastructure. Also need to manually add in linode token in [linode.txt](./app/resources/linode.txt)

3. Look for istio gateway external ip. Get it by using use kubectl get svc -n istio-system
When IP is obtained, edit /etc/hosts and add/ < ip > 	x.imperio where x is name of services that are to be used, ie. for gateway/ 192.168.0.227	gateway.imperio

3. Hit `sh ./run-local.sh <linode_token>` command and wait for spring app to start in pod

`npm run-script serve`
### Cloud Deployment
1. Build docker image

2. Ensure correct kubeconfig and proper profile is chosen by using `kubectl config get-context` and `kubectl config use-context <name>`

3. Apply [imperio-linode-services](imperio-linode-services.yaml) file via kubectl apply -f


