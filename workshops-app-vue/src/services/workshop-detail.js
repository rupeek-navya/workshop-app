import axios from 'axios';

export const fetchWorkshopsDetail = (id) => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops/${id}` )
                .then(response => {
                    console.log( response.data );
                    return response.data;
                })
                .catch(error => {
                    return error.message
                    // console.log( error.message );
                });
}