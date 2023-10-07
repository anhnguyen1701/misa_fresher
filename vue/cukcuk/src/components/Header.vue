<template>
  <header>
    <div class="left">
      <div class="icon-left"></div>
      <div class="logo"></div>
    </div>
    <div class="right">
      <div class="avatar"></div>
      <span class="name">Nguyễn Lâm Anh</span>
      <div class="icon-right"></div>
    </div>
  </header>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  background: white;
  height: 56px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  margin-left: 16px;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 16px;
}

.right {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 24px;
  margin-right: 16px;
}

.icon-left {
  background-image: url('../assets/img/toggle.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 24px;
  height: 24px;
  line-height: 56px;
  display: block;
  line-height: 56px;
  border-radius: 50%;
}

.logo {
  background-image: url('../assets/img/cukcuk-logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: calc(175px / 4);
  width: 175px;
}

.avatar {
  background-image: url('../assets/img/default-avatar.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

.icon-right {
  background-image: url('../assets/icon/option.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 24px;
  width: 24px;
}
</style>
