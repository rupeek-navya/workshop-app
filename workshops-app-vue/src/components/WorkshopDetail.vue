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
            
        <div class="row" v-if="status === 'ERROR_LOADING'">
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
                                            <span v-html="modifyDateFormat(workshop.startDate)"></span> - 
                                            <span v-html="modifyDateFormat(workshop.endDate)"></span>
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
                                        <i :class="workshop.modes.online ? 'fa fa-check' : 'fa fa-times'" />
                                        <small>Online</small>
                                    </p>
                                    <p>
                                        <i :class="workshop.modes.inPerson ? 'fa fa-check' : 'fa fa-times'" />
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
                <h3>Sessions in this workshop</h3>
                <hr/>
                <sessions
                    v-bind:workshopId="workshop.id"
                >
                </sessions>
            </div>
        </div>
    </div>
</template>

<script>

import { fetchWorkshopById } from '../services/workshop-detail';
import Sessions from './Sessions'

const LOADING = 'LOADING', LOADED = 'LOADED', ERROR_LOADING = 'ERROR_LOADING';
export default {
    name: 'WorkshopDetails',
    components:{
        Sessions
    },
    data() {
        return {
            status: LOADING,
        };
    },
    methods: {
        modifyDateFormat(isoDate){
            const date = new Date( isoDate );
            return date.toDateString()
        },
    },
    mounted() {
        fetchWorkshopById( this.$route.params.id )
            .then( workshop => {
                this.status = LOADED;
                this.workshop = workshop;
            })
            .catch( error => {
                this.status = ERROR_LOADING
                this.error = error;
            });
    }
}
</script>