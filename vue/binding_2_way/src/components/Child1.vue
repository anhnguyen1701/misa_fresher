<template>
  <div class="ex1">
    <p>Child</p>
    <div class="combobox__input-field" style="align-items: center">
      <input class="ex2-span combobox__input" v-model="inputTxt" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ChildC1',
  props: { modelValue: String },
  data() {
    return { inputTxt: '' };
  },
  watch: {
    inputTxt(newVal, oldVal) {
      this.$emit('update:modelValue', this.inputTxt);
    },
    modelValue(newVal, oldVal) {
      this.inputTxt = newVal;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
