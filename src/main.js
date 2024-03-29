// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import easyui from './libs/layout/jquery.easyui.min'
import VueI18n from 'vue-i18n'


import {
    Header,
    Aside,
    Main,
    Container, 
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    //Slider,
    Icon,
    Row,
    Col,
    Upload,
   // Progress,
    //Spinner,
   // Badge,
    //Card,
    //Rate,
    //Steps,
   // Step,
    //Carousel,
   // Scrollbar,
    //CarouselItem,
     Collapse,
     CollapseItem, 
    //Cascader,
    ColorPicker,
    Loading,
    MessageBox,
    Message,
    Notification,
 
  } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
 

Vue.use(Pagination)
Vue.use(Dialog)
//Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
 Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
//Vue.use(TimeSelect)
//Vue.use(TimePicker)
////Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Alert)
//Vue.use(Slider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
//Vue.use(Progress)
//Vue.use(Spinner)
//Vue.use(Badge)
//Vue.use(Card)
//Vue.use(Rate)
////Vue.use(Steps)
//Vue.use(Step)
//Vue.use(Carousel)
//Vue.use(Scrollbar)
////Vue.use(CarouselItem)
Vue.use(Collapse)


Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Loading)
Vue.use(ColorPicker)
 
Vue.config.productionTip = false
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

Vue.use(VueI18n)
const i18n = new VueI18n({
　　  locale: 'zh-CN', // 语言标识
　　  messages:{
        'zh-CN': require('./assets/lang/zh-CN'),   // 中文语言包
        'zh-TW': require('./assets/lang/zh-TW'),   // 中文繁体语言包
        'en': require('./assets/lang/en'),    // 英文语言包
 　　  } 
　　})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: { App },
  data:{
        eventHub: new Vue()
    }
})
