<template>
  <div class="child">
    <div>我是子组件，我的名字：{{son.name}}</div>
    <div><slot v-bind:son="son" name="default">{{son.name}}</slot></div>
    <div><slot v-bind:son="son" name="other">ddd</slot></div>
  </div>
</template>
<script>
  export default{
    props: ['son']
  }
</script>
<style scoped>
.child{
  background-color: #92ceff;
  padding: 20px;
}
</style>