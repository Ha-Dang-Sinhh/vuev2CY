import Vue from 'vue'
import App from './App.vue'
import './index.css'

Vue.config.productionTip = false

Vue.component('MyButton',{
  data(){
    return{
      buttonText:'myButton'
    }
  },
  template :'<button>{{buttonText}}</button>',
})

Vue.component('MySelect',{
  template:'<select><option value="">Vui lòng chọn</option></select>',
})

Vue.component('CustomButton',{
  data(){
    return{
      CustomButton:'CustomButton',
      href:'https://www.google.com/',
    }
  },
  template : '<button><a :href="href">{{CustomButton}}</a></button>',
})

new Vue({
  render: h => h(App),
}).$mount('#app')
