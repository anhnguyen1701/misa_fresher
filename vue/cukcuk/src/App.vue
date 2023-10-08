<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <Sidebar></Sidebar>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  },
};
</script>

<style>
:root {
  --sidebar: #021434;
  --sidebar-hover: #4d6695;
  --gray-1: #edeff1;
  --gray-2: #f4f4f4;
  --gray-3: #888888;
  --btn-gray: #f0f0f0;
  --btn-green: #00833a;
  --tbl-hover: #f0fdee;
  --tbl-check: #0d8c4b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  overflow: unset;
}

html {
  font-size: 14px;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 56px);
  width: 100vw;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
</style>
