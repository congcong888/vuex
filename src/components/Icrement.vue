<template>
  <div>
      <h2>计数器</h2>
      <button @click="jian">-</button>
      {{num}}
      <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // num:100
      num: this.$store.state.num //引用vuex里定义的变量
    }
  },
  methods:{
    add(){
      this.num++;
    },
    jian(){
      this.num--;
    }
  }
}
</script>

