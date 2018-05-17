import Axios from 'axios';

export default class Api {

    static warning(parameters = {}){
        return Api.callApi('reception_etat', parameters, false);
    }

    static callApi(route, params = {}, cache = true) {
        // Waiting for result

        let promise;
        let currentConf = { headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': 'Allow'
            } };

        let url = "http://workshop.local:5000/" + route;
        promise = Axios.post(url, params, currentConf);

        promise.catch((error) => {
            if(error.response.status === 401) {
                console.log("exit with error")
            }
        });

        return promise;
    }
}