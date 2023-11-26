# the connection to other microservicces in the cluster

# connection to banner service

const axios = require('axios');

axios.get('http://bnr-server-service.bnr.svc.cluster.local')
.then(response => {
console.log(response.data);
})
.catch(error => {
console.error(error);
});

# connection to store service

const axios = require('axios');

axios.get('http://store-server-service.store.svc.cluster.local')
.then(response => {
console.log(response.data);
})
.catch(error => {
console.error(error);
}); # connection to store service
const axios = require('axios');

# connection to oms service

axios.get('http://oms-server-service.oms.svc.cluster.local')
.then(response => {
console.log(response.data);
})
.catch(error => {
console.error(error);
});

# connection to erp service

axios.get('http://erp-server-service.erp.svc.cluster.local')
.then(response => {
console.log(response.data);
})
.catch(error => {
console.error(error);
});
