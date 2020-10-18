<template>
    <div v-if="status==='LOADED'">
        <div class="card" v-for="(session,index) in sessions" :key="session.id">
            <div class="card-body" v-if="session.sequenceId!==null && session.name && !session.createdDate">
                <div class="container">
                    <div class="row">
                        <div class="col-1">
                            <i class="fas fa-caret-up" style="font-size:2em" @click="upvote(session.id,session.name,index)"></i>  
                        </div>
                        <div class="col">
                            {{session.name}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                           {{session.upvoteCount}}
                        </div>
                        <div class="col">
                            <div><strong>by {{session.speaker}}</strong></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <i class="fas fa-sort-down" style="font-size:2em" @click="downvote(session.id,session.name,index)"></i>
                        </div>
                        <div class="col">
                            <div class="badge badge-success" v-if="session.level==='basic' || session.level==='Basic'" >{{session.level}}</div>
                            <div class="badge badge-info" v-else-if="session.level==='intermediate' || session.level==='Intermediate'">{{session.level}}</div>
                            <div class="badge badge-warning" v-else>{{session.level}}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                        </div>
                        <div class="col">
                            <div>{{session.duration}} hours</div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-1">
                        </div>
                        <div class="col">
                            <div>{{session.abstract}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {fetchSessions,upvotePost,downvotePost} from '../services/workshops'

export default {
    props:['workshopId'],
    name:'Sessions',
    data(){
        return {
            status: 'LOADING',
            sessions:this.sessions
        }
        
    },
    methods:{
        upvote(idvalue,name,index){
            this.sessions[index].upvoteCount+=1
            let value=this.sessions[index].upvoteCount
            upvotePost(value,idvalue,name)
            .then(()=>{
                console.log('successful')
            }).catch((error)=>{
                console.log(error.message)
            })
            
        },
        downvote(idvalue,name,index){
            this.sessions[index].upvoteCount-=1
            let value1=this.sessions[index].upvoteCount
            downvotePost(value1,idvalue,name)
            .then(()=>{
                console.log('succesful')
            })
            .catch((error)=>{
                console.log(error.message)
            })
            
        },   
    },
    mounted() {
        fetchSessions(this.workshopId)
            .then( sessions => {
                this.status='LOADED'
                this.sessions = sessions;
            })
            .catch( error => {
                console.log(error.message)
            });
    }


}
</script>

<style>

</style>

