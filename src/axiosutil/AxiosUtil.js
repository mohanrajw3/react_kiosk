import axios from "axios";


export const postData = (url, data) => {
    axios.post(url, data).then(function (response) {

            if (response.data.code === "200") return response;

        }, reason => function (response) {
            return response;
        }
    )
}



