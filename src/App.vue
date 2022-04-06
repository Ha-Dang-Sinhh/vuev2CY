<template>
  <div id="app">
<!--    <HelloWorld />-->
<!--    <DemoVue />-->
<!--    <ParentComponent />-->
    <ListProducts></ListProducts>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DemoVue from './components/DemoVue.vue'
// import ParentComponent from './components/ParentComponent.vue'
import ListProducts from './components/ListProducts.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // DemoVue,
    // ParentComponent,
    ListProducts,
  }
}
</script>

<style>
#app {
  padding: 0;
  margin:0;
  box-sizing: border-box;
}
</style>
