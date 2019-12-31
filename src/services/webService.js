import axios from 'axios';

const config = {
    headers : {
        'Authorization': `Bearer tTU3gFVUdP`  
    }
}

const body = {
    email : "mayankmittal@intugine.com" 
}

const post = endPonint => (
    new Promise((resolve,reject) => {
        axios.post(
            endPonint,
            body,
            config
        ).then( response => resolve(response.data.data)
        ).catch( error => reject(error)
        );
    })
)

export default {
    post
}