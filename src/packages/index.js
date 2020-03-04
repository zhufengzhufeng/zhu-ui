// 所有的组件的入口

import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
const install = (Vue) =>{
    Vue.component(Button.name,Button)
    Vue.component(Icon.name,Icon)
    Vue.component(ButtonGroup.name,ButtonGroup)
}

// 有可能组件会通过script标签的方式引入 
// <script src="zhu-ui"></script>

if(typeof window.Vue !== 'undefined'){
    install(Vue); // 全局直接通过script 引用的方式会默认调用install方法
}

export default {
    install
}