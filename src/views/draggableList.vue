<template>
	<div>
		<dnd-list :list1 = 'list1' :list2 = 'list2' :list1Title = 'list1Title' :list2Title = 'list2Title'></dnd-list>
	</div>
</template>
<script>
import dndList from './../components/dndlist'
	export default {
		components:{
			 dndList
		},
		data(){
			return{
				list1:[{id:'1',author:'gzk',title:'title_1'},{id:'2',author:'gzk',title:'title_2'},{id:'3',author:'gzk',title:'title_3'}],
				list2:[{id:'4',author:'gzk',title:'title_4'},{id:'5',author:'gzk',title:'title_5'},{id:'6',author:'gzk',title:'title_6'}],
				list1Title:'数据列表',
				list2Title:'垃圾箱'
			}
		 
		}
	}
</script>