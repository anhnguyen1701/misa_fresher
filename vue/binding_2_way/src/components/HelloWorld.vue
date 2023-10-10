<template>
  <div class="ex1">
    <h3>Parent v-model</h3>
    <input type="text" v-model="this.inp[0]" />
    <h3>Parent :value</h3>
    <input type="text" :value="this.inp[0]" />
    <Child1 :data="inp"></Child1>
  </div>
</template>

<script>
import Child1 from './Child1.vue';

export default {
  components: {
    Child1,
  },
  data() {
    return {
      inp: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ex1 {
  text-align: center;
  border: 1px solid black;
  width: fit-content;
}
</style>
