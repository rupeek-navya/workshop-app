import axios from 'axios';
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast);
export const fetchWorkshops = () => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops` )
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    console.log( error.message );
                });

}
export const fetchSessions = (id) => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops/${id}/sessions` )
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    console.log( error.message );
                });
}
export const upvotePost=(value,idvalue,name)=>{
    return  axios.put(`https://workshops-server.herokuapp.com/sessions/${idvalue}/upvote`,{
                upvoteCount:value
            }).then(()=>{
                Vue.$toast.open(`Your vote for ${name} is registered`);
            }).catch((error)=>{
                console.log(error.message)
            })
}
export const downvotePost=(value,idvalue,name)=>{
    return  axios.put(`https://workshops-server.herokuapp.com/sessions/${idvalue}/downvote`,{
                upvoteCount:value
            }).then(()=>{
                Vue.$toast.open(`Your vote for ${name} is registered`);
            }).catch((error)=>{
                console.log(error.message)
            })
}



