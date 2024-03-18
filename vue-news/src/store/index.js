import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {}
    },
    getters:{
        fetchedAsk(state){
            return state.ask;
        }
    },
    mutations,
    actions
});
