<template>
  <div style="padding: 10px;">
    <Parent></Parent>
    <iframe src="https://cn.vuejs.org/v2/guide/components-slots.html" frameborder="0"></iframe>
  </div>
</template>

<script>
import Parent from '../components/Parent.vue'
export default {
  components: {
    Parent
  }
}
</script>
<style>
body{
  background-color: #e6e6e6;
}
</style>
<style scoped>
iframe{
  width: 100%;
  height: 2000px;
  margin-top: -1px;
  border:1px solid #ccc;
  box-sizing: border-box;
}
</style>
