<template>
  <div class="ex1">
    <h3>Input</h3>

    <p>Parent</p>
    <div class="combobox__input-field" style="align-items: center">
      <input class="ex2-span combobox__input" v-model="inputVal" />
    </div>
    <Child1 v-model="inputVal"></Child1>
  </div>

  <div class="ex2">
    <h3>Combobox</h3>

    <p>Parent</p>
    <div class="combobox__input-field" style="align-items: center">
      <input class="ex2-span combobox__input" v-model="comboboxInput" />
    </div>
    <p>Child</p>
    <Child v-model="comboboxInput"></Child>
    <p>Child</p>
    <Combobox
      url="https://cukcuk.manhnv.net/api/v1/Departments"
      propValue="DepartmentId"
      propText="DepartmentName"
      v-model="comboboxInput"
    ></Combobox>
  </div>
</template>

<script>
import Child1 from './Child1.vue';
import Combobox from './Combobox.vue';
import Child from './Child.vue';

/* eslint-disable */
export default {
  components: {
    Child1,
    Combobox,
    Child,
  },
  data() {
    return {
      comboboxInput: '',
      inputVal: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ex1 {
}

.ex2 {
  margin-top: 20px;
}

.ex2-span {
  height: 1rem;
  display: block;
}
</style>
