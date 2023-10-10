<template>
  <div class="ex1">
    <h3>Child1 :value</h3>
    <input type="text" :value="this.data[0]" />
    <h3>Child1 v-model</h3>
    <input type="text" v-model="this.data2way[0]" />
  </div>
</template>

<script>
export default {
  name: 'ChildC1',
  components: {},
  props: {
    data: String,
  },
  emits: ['update:data'],
  data() {
    return {
      data2way: '',
    };
  },
  provide() {
    return {
      dataFrom1: 'this.data[0]',
    };
  },
  created() {
    this.data2way = this.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
