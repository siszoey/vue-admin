import * as types from './../type'

const state = {
	themecolor:''
}
const mutations = {
	// 改变颜色
    [types.CHANGE_COLOR](state, val) {   
    	console.log(val)        
        state.themecolor = val; 
    },
}
 export default {
    state,
    mutations
}