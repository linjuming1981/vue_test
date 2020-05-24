<template>
  <div class="parent" >
    <div class="box">我是父组件1，我的名字：{{name}}</div>
    <Child :son="son1">
      <template #default="{x = {job:'php'}}">
        {{x.job}}
      </template>
      <template #[mySlot]="otherProps">
        {{otherProps.son.name}}
      </template>
    </Child>
  </div>
</template>
<script>
import Child from './Child.vue'
export default{
  props: ['name'],
  data(){
    return {
      son1: {
        name: 'king11',
        age: 321
      },
      mySlot: 'other'
    }
  },
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
.box{
  margin-bottom: 10px;
}
</style>