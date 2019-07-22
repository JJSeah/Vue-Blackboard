import Vue from 'vue';
import Vuex from 'vuex';
import blackboardModule from './modules/blackboard';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        blackboardModule
    }
});