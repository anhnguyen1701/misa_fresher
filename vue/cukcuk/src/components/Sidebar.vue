<template>
  <aside v-if="isAsideOpen">
    <router-link to="/" class="link">
      <div class="logo home"></div>
      <span class="text">Trang chủ</span>
    </router-link>
    <router-link to="/report" class="link">
      <div class="logo report"></div>
      <span class="text">Báo cáo</span>
    </router-link>
    <router-link to="/customer" class="link">
      <div class="logo customer"></div>
      <span class="text">Khách hàng</span>
    </router-link>
    <router-link to="/employee" class="link">
      <div class="logo employee"></div>
      <span class="text">Nhân viên</span>
    </router-link>
    <router-link to="/setting" class="link">
      <div class="logo setting"></div>
      <span class="text">Cài đặt</span>
    </router-link>
    <div class="collapse-div link" @click="collapseAside">
      <div class="logo collapse"></div>
      <span class="text">Thu gọn</span>
    </div>
  </aside>
  <aside class="aside-2" v-else>
    <router-link to="/" class="link2">
      <div class="logo home"></div>
    </router-link>
    <router-link to="/report" class="link2">
      <div class="logo report"></div>
    </router-link>
    <router-link to="/customer" class="link2">
      <div class="logo customer"></div>
    </router-link>
    <router-link to="/employee" class="link2">
      <div class="logo employee"></div>
    </router-link>
    <router-link to="/setting" class="link2">
      <div class="logo setting"></div>
    </router-link>
    <div class="collapse-div-2 link2" @click="collapseAside">
      <div class="logo collapse-2"></div>
    </div>
  </aside>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Sidebar',
  methods: {
    collapseAside() {
      this.isAsideOpen = !this.isAsideOpen;
    },
  },
  data() {
    return {
      isAsideOpen: true,
    };
  },
};
</script>

<style scoped>
aside {
  background-color: var(--sidebar);
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
}

.aside-2 {
  background-color: var(--sidebar);
  width: 60px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
}

.link {
  text-decoration: none;
  color: white;
  display: flex;
  height: 44px;
  width: 176px;
  min-width: fit-content;
  font-weight: 600;
  margin-bottom: 4px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
}

.link:hover {
  background-color: var(--sidebar-hover);
}

.link:first-child {
  margin-top: 20px;
}

.link2 {
  text-decoration: none;
  color: white;
  display: flex;
  height: 44px;
  min-width: fit-content;
  font-weight: 600;
  margin-bottom: 4px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
}

.link2:hover {
  background-color: var(--sidebar-hover);
}

.link2:first-child {
  margin-top: 20px;
}

.logo {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 24px;
  height: 24px;
  color: white;
  margin: 10px 12px;
}

.collapse-div {
  position: absolute;
  bottom: 10px;
}

.collapse-div::before {
  content: '';
  width: 200px;
  height: 1px;
  background-color: #213553;
  position: absolute;
  top: -15px;
  left: -12px;
}

.collapse-div-2 {
  position: absolute;
  bottom: 10px;
}

.collapse-div-2::before {
  content: '';
  width: 50px;
  height: 1px;
  background-color: #213553;
  position: absolute;
  top: 0;
  left: -1px;
}

.home,
.report,
.customer,
.employee,
.setting,
.collapse,
.collapse-2 {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(172deg)
    brightness(107%) contrast(102%);
}

.home {
  background-image: url('../assets/icon/dashboard.png');
}

.report {
  background-image: url('../assets/icon/report.png');
}

.customer {
  background-image: url('../assets/icon/dic-employee.png');
}

.employee {
  background-image: url('../assets/icon/dic-employee.png');
}

.setting {
  background-image: url('../assets/icon/setting.png');
}

.collapse {
  background-image: url('../assets/icon/btn-prev-page.svg');
}

.collapse-2 {
  background-image: url('../assets/icon/btn-next-page.svg');
}
</style>
