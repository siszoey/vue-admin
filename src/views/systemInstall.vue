<template>
	<div id="systemInstall" style="background-color:#fff;border:1px solid #e6e6e6;padding:15px">
  		<el-form ref="form" :model="form" label-width="100px">
 			<el-form-item label="风格设置：">
				<button class="themechange-btn btn-2983d8" @click="changeColor('2983d8')"></button>
				<button class="themechange-btn btn-73d13d" @click="changeColor('73d13d')"></button>
				<button class="themechange-btn btn-36cfc9" @click="changeColor('36cfc9')"></button>
				<button class="themechange-btn btn-597ef7" @click="changeColor('597ef7')"></button>   
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
 
 
	export default{
		data(){
			return{
				form:{},
			}
		},
 		 methods:{
 		 	 changeColor(val){
 		 	 	 localStorage.setItem('systemThemeColors', val);
 		 	 	 this.$root.eventHub.$emit('changeColor',val);
 		 	 }
 		 }
		}
</script>