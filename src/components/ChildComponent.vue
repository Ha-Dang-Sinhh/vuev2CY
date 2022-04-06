<template>
  <div>
    <h2>Child Component</h2>
    <div>
      <slot name="slot1">
        Hello. I am child Component
      </slot>

      <slot name="slot2" :content="content" >
        Hello. I am child Component
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChildComponent',
  data(){
    return{
      content:'abc',
    }
  },
  components: {

  }
}
</script>

<style>

</style>