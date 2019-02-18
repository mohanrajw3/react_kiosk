import axios from "axios";

export default {
    POST: function (url, data) {

        return new Promise((resolve, reject) => {
            axios.post(url, data).then(function (response) {
                    return resolve(response);
                }, reason => function (response) {
                    return reject(response);
                }
            )
        })

    }
}



