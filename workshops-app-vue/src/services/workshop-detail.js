import axios from 'axios';

export const fetchWorkshopById= (id) => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops/${id}` )
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    return error.message
                    // console.log( error.message );
                });
}