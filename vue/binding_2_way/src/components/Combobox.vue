<template>
  <div class="container">
    <div class="combobox">
      <span class="combobox__text"></span>
      <div class="combobox__input-field">
        <input
          id="combobox_input"
          type="text"
          class="combobox__input"
          placeholder="Type here"
          v-model="this.inputTxt"
          @input="onInput($event)"
        />
        <button id="combobox_btn" class="combobox__btn" @click="showList">
          <span class="material-symbols-outlined"> expand_more </span>
        </button>
      </div>
      <ul id="combobox_data" class="combobox__data" v-if="isShowList">
        <li @click.self="updateInp($event, -1)" :class="getLiClass(-1)">
          <span class="combobox__data-li-text">- Chọn giá trị -</span>
          <span
            v-if="this.itemSelected == -1"
            class="material-symbols-outlined icon"
          >
            done
          </span>
        </li>
        <li
          v-for="item in this.list"
          :key="item[propValue]"
          @click.self="updateInp($event, item[propValue])"
          :class="getLiClass(item[propValue])"
        >
          <span class="combobox__data-li-text">
            {{ item[propText] }}
          </span>
          <span
            v-if="this.itemSelected == item[propValue]"
            class="material-symbols-outlined icon"
          >
            done
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Combobox',
  props: {
    url: {
      type: String,
      required: true,
    },
    modelValue: String,
    propValue: String,
    propText: String,
  },
  data() {
    return {
      inputTxt: '',
      isShowList: false,
      list: {},
      itemSelected: -1,
    };
  },
  methods: {
    showList() {
      this.isShowList = !this.isShowList;
    },
    updateInp(e, key) {
      this.inputTxt = e.target.querySelector(
        '.combobox__data-li-text'
      ).textContent;
      this.itemSelected = key;
    },
    onInput(e) {},
    getLiClass(key) {
      if (this.itemSelected === key) return 'combobox__data-li-check';
      else return 'combobox__data-li-text';
    },
  },
  created() {
    fetch(this.url)
      .then((res) => res.json())
      .then((res) => {
        this.list = res;
      });
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

<style>
.combobox {
  display: flex;
  flex-direction: column;
}

.combobox__text {
  margin-bottom: 8px;
}

.combobox__input-field {
  width: 200px;
  height: 36px;
  display: flex;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
}

.combobox__input-field:focus-within {
  border-color: #50b83c;
}

.combobox__input {
  height: 100%;
  outline: none;
  border: 0;
  background: transparent;
  padding: 12px 8px;
  width: calc(100% - 36px);
}

.combobox__btn {
  height: 100%;
  width: 36px;
  border: none;
  border-left: 1px solid #e6e6e6;
  background-color: white;
  background: transparent;
}

.combobox__btn span {
  line-height: 36px;
  color: #676767;
}

.combobox__data {
  list-style: none;
  width: 200px;
  max-height: 308px;
  background-color: white;
  border-radius: 4px;
  padding: 8px;
  overflow-y: scroll;
  border: 1px solid #e6e6e6;

  /* box-shadow: 0px 40px 16px rgba(23, 27, 42, 0.24); */
}

.combobox__data icon {
  font-weight: 200;
}

.combobox__data li {
  height: 36px;
  font-weight: 400;
  line-height: 36px;
}

.combobox__data li:hover {
  background-color: rgba(80, 184, 60, 0.1);
}

.combobox__data-li-check {
  /* display: flex; */
  align-items: center;
  color: #50b83c;
  justify-content: space-between;
  /* flex: none; */
}
</style>
