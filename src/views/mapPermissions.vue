<template>
	<div id="mapPermissions" class="panel-content">
		<div  data-options="region:'west',split:true"  title="人员列表" style="width:250px;">
			s
		</div>
		<div data-options="region:'center',split:true"   style="padding:15px 15px 15px 5px;border-left:none">
			 	b
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
		 	$('#mapPermissions').layout();
		 }
	}
</script>