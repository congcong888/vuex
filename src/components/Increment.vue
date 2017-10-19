<template>
  <div>
    <h2>计数器</h2>
    <button @click="jian">-</button>
    <span>{{num}}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     // num:100
  //     num: this.$store.state.num  //引用vuex里定义的变量
  //   }
  // },
  computed:{
    num(){
      return this.$store.state.num
    }
  },
  methods: {
    add() {
      // this.num += 5;
      // 点击的时候需要改变状态，提交 mutation addIncrement
      // 利用 $store.commit 里面写的参数相当于 mutation的函数名字
      // this.$store.commit('addIncrement',5);
      // this.$store.commit('addIncrement',{name:'cc',age:23,n:10});
      
      // this.$store.commit({
      //   type:'addIncrement',
      //   name:'cc',
      //   age:23,
      //   n:10
      // });

      this.$store.dispatch('addIncrement');

    },
    jian() {
      this.$store.commit('jianIncrement',5);
    }
  }
}
</script>

