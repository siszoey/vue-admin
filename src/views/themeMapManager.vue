<template>
	<div id="themeMapManager">
		<div class="themeMap-data-tool">
			 <el-button type="primary" icon="el-icon-refresh" size="mini" @click=" ">刷新</el-button>
			 <el-button type="primary" icon="el-icon-circle-plus" size="mini" @click=" ">新建专题</el-button>
			 <el-button type="primary" icon="el-icon-document" size="mini" @click=" ">保存</el-button>
			 <el-button type="primary" icon="el-icon-delete" size="mini" @click=" ">删除</el-button>
		</div>
		<div  id="themeMapManagerContent" class="panel-content" >
			<div  data-options="region:'west',split:true"  title="地图数据" style="width:250px;">
				s
			</div>
			 <div data-options="region:'center',split:true" style="padding:15px 15px 15px 5px;border-left:none">
			 	b
			</div>
		</div>
	</div>
</template>

<script>
	import api from './../fetch/index'
	export default{
		 data(){
		 	return {}
		 },
		  mounted(){
		 	$('#themeMapManagerContent').layout();
		 }
	}
</script>