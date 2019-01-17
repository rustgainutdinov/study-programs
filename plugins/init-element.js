import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import locale from 'element-ui/lib/locale/lang/ru-RU'
Vue.use(ElementUI, { locale });

Vue.directive('xxs', {
  bind(el, binding) {
    el.classList.add('el-col-xxs-' + binding.value.span);
    el.classList.add('el-col-xxs-offset-' + binding.value.offset);
  }
});