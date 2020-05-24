<template>
  <div class="parent">
    <div>我是父组件1</div>
    <Child>
      插槽内容
    </Child>
  </div>
</template>
<script>
import Child from './Child.vue'
export default{
  components: {
    Child
  }
}
</script>
<style scoped>
.parent{
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #bcffbb;
}
</style>