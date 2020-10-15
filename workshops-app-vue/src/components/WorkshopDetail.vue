<template>
    <div>
        <div class="row" v-if="status === 'LOADING'">
            <div class="col-12">
                <!-- b4-alert-dismissible -->
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>Loading workshops...</strong>
                </div>
            </div>
        </div>
            
        <div class="row" v-if="status === 'ERROR'">
            <div class="col-12">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>{{this.error.message}}</strong>
                </div>
            </div>
        </div>

        <div class="row" v-if="status === 'LOADED'">
            <div class="col-12 clearfix">
                <div class="row">
                    <h2>
                        {{workshop.name}}
                    </h2>
                    <hr />
                    <div class="row my-4">
                        <div class="col-4">
                            <img class="img-fluid" :src="workshop.imageUrl" alt="workshop.name" />
                        </div>
                        <div class="col-8">
                            <div class="row">
                                <div class="col-3">
                                    <p>
                                        <small>
                                            {{workshop.startDate}} - {{workshop.endDate}}
                                        </small>
                                    </p>
                                    <p>
                                        <small class="text-muted">
                                            {{workshop.time}}
                                        </small>
                                    </p>
                                </div>
                                <div class="col-3">
                                    <p> 
                                        <i :class="workshop.modes.online ? 'fa-check' : 'fa-times'" />
                                        <small>Online</small>
                                    </p>
                                    <p>
                                        <i :class="workshop.modes.inPerson ? 'fa-check' : 'fa-times'" />
                                        <small>In person</small>
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12" v-html="workshop.description"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Alert from './utils/Alert';
import { fetchWorkshopsDetail } from '../services/workshop-detail';

const LOADING = 'LOADING', LOADED = 'LOADED', ERROR = 'ERROR';

export default {
    name: 'WorkshopsDetail',
    data(){
        return{
            status:LOADING
        }
    },
    mounted(){
        fetchWorkshopsDetail(this.$route.params.id)
            .then( workshop => {
                this.status = LOADED;
                this.workshop = workshop;
            })
            .catch( error => {
                this.status = ERROR
                this.error = error;
            });
    }
}
</script>
<style scoped>

</style>