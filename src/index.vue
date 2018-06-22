<template>
	<el-container id="webGisManager" :class="themeStyle">
  		<el-header id="gisManagerHeader" class="header-bg"> 
        <el-row>
        <el-col :span="4">
          <div @click="collapseChange" class="menu-trigger close">
            <span class="trigger-icon">
          </span>
        </div>
        </el-col>
        <el-col :span="14">
            <p class="nav-active-colors">{{ $t("message.title") }}</p>
        </el-col>
        <el-col :span="6">
          <el-select v-model="locale" placeholder="请选择" size="small" style="float:right" class="language-select">
            <el-option
             v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        <div style="float:right">
          <screen-full></screen-full>
          </div>
            <div class="login">
            <img class="userimg" src="./assets/image/userlogo.png"> 
            <el-dropdown class="username" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{userName}}
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">{{ $t("message.userInfor") }}</el-dropdown-item>
                <el-dropdown-item command="exit">{{ $t("message.exit") }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
           
        </el-col>
    </el-row>
  			 
  		</el-header>
  		<el-container class="gisManager-content">
    		<el-aside class="gisManager-nav" width="200px;"> 
				    <el-menu class="el-menu-vertical-demo"  unique-opened :collapse="isCollapse" :default-active="analysisActiveTabName">
                  <el-menu-item v-for="(item,index) in $t('message.nav')" :index="item.id" :key="index"  @click="openTab(item)">
                        <i v-bind:class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                  </el-menu-item>
                </el-menu>
    		    </el-aside>
   			<el-main class="gisManager-main"> 
   				<el-tabs class="tabs tab-content" v-model="analysisActiveTabName" @tab-remove="closeTab" type="card">
            		<el-tab-pane v-for="item in analysisTabList" :key="item.name" :name="item.name" :label="item.	label" :closable="item.closable">
             			<component :is="item.component"  ></component>  
            		</el-tab-pane>
          		</el-tabs>
   			</el-main>
  			</el-container>
		</el-container>
	</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import api from './fetch/index'
import screenFull from './components/screenfull'
	export default {
		components:{
			 screenFull
		},
	data() {
          return {
             themeStyle:'theme-2983d8',//  
             test:'theme-2983d8',
             locale:'zh-CN',
             options: [{
              value: 'zh-CN',
              label: '中文'
            },{
              value: 'en',
              label: 'English'
            },{
              value: 'zh-TW',
              label: '中文繁体'
            } ],
          	userName:'admin',
            isCollapse: false,
        };
    }, 
    mounted() {
      let curcolor = localStorage.getItem('systemThemeColors');
      console.log('curcolor:'+curcolor)
       if(curcolor != null){
         this.themeStyle = 'theme-' + curcolor;   
       }
       //
      let lang = localStorage.getItem('localeSystemLang');
      if(lang !=null){
        this.locale = lang
      }
       this.$i18n.locale = this.locale
    },
     created() {
      this.$root.eventHub.$on('changeColor',(target) => {
          console.log(target)
          let curcolor = localStorage.getItem('systemThemeColors');
          this.themeStyle = 'theme-' + curcolor;   
      });
    },
    computed: {
        analysisActiveTabName: {
            get() {
                return this.$store.state.tab.analysisActiveTabName;
            },
            set(value) {
                this.$store.commit("SET_ANALYSISACTIVETABNAME", value);
            }
        },
        ...mapGetters({
            analysisTabList: 'DONE_NAV_ANALYSIS_TABLIST'
        })
    },
    watch:{
      locale(newVal,oldVal){
        this.$i18n.locale = this.locale
        localStorage.setItem('localeSystemLang',this.locale);
         var namesMap;
         var newList=[];
         for(var index in this.$i18n.messages){
            if(this.$i18n.messages[index].message.lang == newVal){
              namesMap = this.$i18n.messages[index].message.nav
            }
         }
         for(var i=0;i<this.$store.state.tab.analysisTabList.length;i++){
           for(var j=0;j< namesMap.length;j++){
              if(this.$store.state.tab.analysisTabList[i].name == namesMap[j].id){
                 newList.push({closable:this.$store.state.tab.analysisTabList[i].closable,
                  component:this.$store.state.tab.analysisTabList[i].component,
                  disabled:this.$store.state.tab.analysisTabList[i].disabled,
                  label:namesMap[j].name,
                  name:this.$store.state.tab.analysisTabList[i].name
                 })
              }
           }
         }
         this.$store.state.tab.analysisTabList = newList
      }
    },
    methods: {
      collapseChange(){
         if ( $(".menu-trigger").hasClass('close')) {
          $(".menu-trigger").removeClass('close');
           this.isCollapse = true
         }else {
            $(".menu-trigger").addClass('close');
            this.isCollapse = false
        }
      },
     	handleCommand(command){
        if(command == 'exit'){
          window.localStorage.removeItem('token')
          this.$router.push('/login')
        }
        if(command == 'a'){
          alert("功能开发中...")
        }
      },
        ...mapMutations({
            openTab: 'SET_ANALYSISADDTAB'
        }),
        ...mapMutations({
            closeTab: 'SET_ANALYSISCLOSETAB'
        }),
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },

	}

</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }


/*绘制收缩按钮*/
.menu-trigger{
  position: relative;
  float: left;
  z-index: 100;
  margin-top:15px;
 
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

/*为过渡效果添加一个泛白的圈*/
.menu-trigger:before{
  position: absolute;
  width: 30px;
  height: 30px;
  content: "";
  opacity: 1;
  border-radius: 50%;
  background-color: transparent;
  -webkit-transform: scale(.5);
  -ms-transform: scale(.5);
  -o-transform: scale(.5);
  transform: scale(.5);
  -webkit-transition: all .4s;
  transition: all .4s;
  -o-transition: all .4s;
}
.menu-trigger.close:before,
.menu-trigger.back:before{
  background-color: #fff;
  opacity: 0;
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
}

/*收缩按钮中间的直线*/
.menu-trigger span.trigger-icon{
  position: absolute;
  top: 50%;
  width: 30px;
  height: 3px;
  display: block;
  right: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #fff;
  -webkit-transition: all .4s;
  transition: all .4s;
  -o-transition: all .4s;
  background-color: #fff;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
}
/*收缩按钮上下的直线*/
.menu-trigger span.trigger-icon:before,
.menu-trigger span.trigger-icon:after{
  position: absolute;
  content: "";
  display: block;
  width: 30px;
  height: 3px;
  background: #fff;
  -webkit-transition: all .4s;
  transition: all .4s;
  -o-transition: all .4s;
}
/*上面的线向上位移250%*/
.menu-trigger span.trigger-icon:before{
  -webkit-transform: translateY(250%);
  -ms-transform: translateY(250%);
  -o-transform: translateY(250%);
  transform: translateY(250%);
}
/*下面的线向下位移250%*/
.menu-trigger span.trigger-icon:after{
  -webkit-transform: translateY(-250%);
  -ms-transform: translateY(-250%);
  -o-transform: translateY(-250%);
  transform: translateY(-250%);
}
/*现在绘制按钮关闭效果*/
/*关闭按钮需要将中间的线隐藏，再将上下两条线组成一个X*/
.menu-trigger.close span.trigger-icon{
    background-color: transparent;
 }
 
.menu-trigger.close span.trigger-icon:before{
  -webkit-transform: translateY(0%) rotate(45deg);
  -ms-transform: translateY(0%) rotate(45deg);
  -o-transform: translateY(0%) rotate(45deg);
  transform: translateY(0%) rotate(45deg);
}
.menu-trigger.close span.trigger-icon:after{
  -webkit-transform: translateY(0%) rotate(-45deg);
  -ms-transform: translateY(0%) rotate(-45deg);
  -o-transform: translateY(0%) rotate(-45deg);
  transform: translateY(0%) rotate(-45deg);
}

/*现在绘制按钮返回效果*/
/*关闭按钮需要上下两条线组成一个箭头*/
.menu-trigger.back span.trigger-icon{
  background-color: #fff;
}
/*先将宽度并为一半在旋转45度*/
.menu-trigger.back span.trigger-icon:before{
  width: 15px;
  -webkit-transform: rotate(45deg) translateY(250%);
  -ms-transform: rotate(45deg) translateY(250%);
  -o-transform: rotate(45deg) translateY(250%);
  transform: rotate(45deg) translateY(250%);
}
.menu-trigger.back span.trigger-icon:after{
  width: 15px;
  -webkit-transform: rotate(-45deg) translateY(-250%);
  -ms-transform: rotate(-45deg) translateY(-250%);
  -o-transform: rotate(-45deg) translateY(-250%);
  transform: rotate(-45deg) translateY(-250%);
}
</style>