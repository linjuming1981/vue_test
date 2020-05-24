<template>
  <div class="child">
    <div>我是子组件</div>
    <slot></slot>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
.child{
  background-color: #92ceff;
  padding: 20px;
}
</style>