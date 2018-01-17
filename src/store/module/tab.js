import * as types from './../type'

// const analysisHome = resolve => require(['../../../views/analysis/home'], resolve)  

const state = {
    analysisMenu:[],      //左侧菜单
    analysisActiveTabName: " ",
    analysisTabList: []
}

const getters = {
    analysisMenu:state=>state.analysisMenu,
    [types.DONE_NAV_ANALYSIS_TABLIST]: state => state.analysisTabList       //获取首页选项卡配置
}


const mutations = {

    //左侧菜单选中
    [types.SET_ANALYSISMENU](state,res) {
        state.analysisMenu = res; 
    },

    // tab 选中
    [types.SET_ANALYSISACTIVETABNAME](state, name) {           
        state.analysisActiveTabName = name;
    },

    //tab 增加
    [types.SET_ANALYSISADDTAB](state, value) {
        console.log(value)
        let index = value.pageUrl;
        let title = value.name;
        if (state.analysisTabList.filter(f => f.name == value.id) == 0) {
            let component = resolve => require([`../../views/${index}`], resolve)
            state.analysisTabList.push({
                label: title,
                name: value.id,
                disabled: false,
                closable: true,
                component: component
            })
        }
        state.analysisActiveTabName = value.id;
        
    },

    //tab 关闭
    [types.SET_ANALYSISCLOSETAB](state, name) {
        let tab = state.analysisTabList.filter(f => f.name == name)[0];
        let index = state.analysisTabList.indexOf(tab);
        console.log(index)
        if(index == 0){
            if (index != state.analysisTabList.length - 1) {
                state.analysisActiveTabName = state.analysisTabList[index + 1].name;
            } else {
                state.analysisActiveTabName = '';
            }    
        }else{
            if (index != state.analysisTabList.length - 1) {
                state.analysisActiveTabName = state.analysisTabList[index + 1].name;
            } else {
                state.analysisActiveTabName = state.analysisTabList[index - 1].name;
            }
        }
        
        state.analysisTabList = state.analysisTabList.filter(f => f.name != name);
    }
}
 
 export default {
    state,
    getters,
    mutations
}