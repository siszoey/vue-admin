import Vuex from "vuex"
import Vue from 'vue'
import * as types from './type'
import tab from  './module/tab'
import theme from  './module/theme'

Vue.use(Vuex)

export default new Vuex.Store({
	
  modules: {
        tab,
        theme    
    }
 

})
