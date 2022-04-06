<template>
  <div>
    <ChildComponent >
      <template #slot1>
        I am slot content1
      </template>
      <template  #slot2="{content,title}">
        I am slot content2
        {{content}}
        {{title}}
      </template>
    </ChildComponent>
    <CustomButton></CustomButton>
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  name:'ParentComponent',
  data(){
    return{
      content:'abc',
      title:'abc123',
    }
  },
  components: {
    ChildComponent
  }
}
</script>

<style>

</style>