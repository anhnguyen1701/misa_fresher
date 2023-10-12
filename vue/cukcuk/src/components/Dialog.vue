<template>
  <div class="dialog-container">
    <h3 class="title">Tiêu đề</h3>
    <p class="description">Mô tả</p>
    <div class="row-3">
      <button class="btn btn-2">Button 2</button>
      <button class="btn btn-1">Button 1</button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Dialog',
};
</script>
<style scoped>
.dialog-container {
  width: 400px;
  height: 173px;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
}

.title {
  font-size: 20px;
  font-weight: 700px;
  text-align: left;
}

.row-3 {
  margin-top: 24px;
  display: flex;
  justify-content: end;
}

.description {
  margin-top: 22px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
}

.btn {
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;
  height: 36px;
  padding: 8px 13px;
}

.btn-1 {
  background-color: #50b83c;
  color: white;
  margin-left: 8px;
}

.btn-2 {
  border: 1px solid #e0e0e0;
}
</style>
