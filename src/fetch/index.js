import axios from 'axios'

// axios 配置
axios.defaults.timeout = 100000;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export default {
	
//基础信息关联接口
//地图基础信息获取
fetchGetWebGisCatalog : data => axios.get('/webgisWebService/config/get/WebGisCatalog'),
//地图基础信息保存
fetchSaveWebGisCatalog : data => axios.post('/webgisWebService/config/save/WebGisCatalog',data), 


//###图层服务
//获取图层数据树形结构接口 
fetchGetLayerTree : data => axios.post('/webgisWebService/maplayer/layerTree'),
//获取图层目录结构树接口 
fetchGetDirTree : data => axios.post('/webgisWebService/maplayer/dirtree'),
//保存图层数据
fetchSaveUpdateLayer : data => axios.post("/webgisWebService/maplayer/saveUpdateLayer",data),
//删除选中的图层节点接口
fetchDeleteSelectedLayer : data => axios.get('/webgisWebService/maplayer/deleteSelectedLayer',data),
//获取arcgis server 根目录服务结构树(arcgis server根目录服务已经保存在syskey表）
fetchGetServiceDir : data => axios.get('/webgisWebService/maplayer/getServiceDir',data),
//获取arcgis server 根目录服务结构树（传入服务根目录地址）
fetchGetDirInfo : data => axios.get('/webgisWebService/maplayer/getDirInfo',data),

//###查询管理
//获取所有查询配置项
fetchGetGlobalsearchAll : data => axios.get('/webgisWebService/globalsearch/all'),
//获取子图层的字段信息接口
fetchGetGlobalsearchLayerfields : data => axios.get('/webgisWebService/globalsearch/layerfields',data),
//保存查询信息接口
fetchGetGlobalsearchSave : data => axios.get('/webgisWebService/globalsearch/save',data),
//删除选中的记录
fetchGetGlobalsearchDelete : data => axios.get('/webgisWebService/globalsearch/delete',data),
}