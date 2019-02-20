import axios from "axios";

const token = localStorage.getItem("token");

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

    },


    GET : function (url) {

        let config = {
            headers: {
                "X-Auth-Token": token,
                "Content-Type": "application/json",
                "X-Requested-With" : "XMLHttpRequest"
            }
        }

        return new Promise((resolve, reject) => {
            axios.get(url,config).then(function (response) {
                    return resolve(response);
                }, reason => function (response) {
                    return reject(response);
                }
            )
        })
    }
}



