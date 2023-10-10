<template>
  <div class="ex1">
    <h3>Child2 - inject</h3>
    <input
      type="text"
      :value="this.dataFrom1"
      @update:value="newValue = $event.target.value"
    />
    <h3>Child2 v-model</h3>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'ChildC2',
  props: {
    data: String,
  },
  inject: ['dataFrom1'],
  data() {
    return {
      injectData: '',
    };
  },
  created() {
    this.injectData = this.dataFrom1;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
