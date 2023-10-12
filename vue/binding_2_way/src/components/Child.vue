<template>
  <div class="ex1">
    <div class="combobox__input-field" style="align-items: center">
      <input class="ex2-span combobox__input" v-model="inputTxt" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Child',
  props: {
    modelValue: String,
  },
  data() {
    return {
      inputTxt: '',
    };
  },
  watch: {
    modelValue(newVal, oldVal) {
      this.inputTxt = newVal;
    },
    inputTxt(newVal, oldVal) {
      this.$emit('update:modelValue', this.inputTxt);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
