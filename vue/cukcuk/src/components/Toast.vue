<template>
  <div v-if="showToast" class="toast">
    <div
      class="logo"
      :class="{
        'logo-warning': logo == 'warning',
        'logo-error': logo == 'error',
        'logo-info': logo == 'info',
      }"
    ></div>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Toast',
  data() {
    return {
      showToast: false,
      message: undefined,
      status: undefined,
      logo: undefined,
    };
  },
  methods: {
    show(opts = {}) {
      this.message = opts.message;
      this.logo = opts.logo;
      let status = opts.status;

      if (status == 200 || status == 201 || status == 204) {
        this.message += ' thành công!';
        this.logo = 'info';
      } else if (
        status == 400 ||
        status == 401 ||
        status == 403 ||
        status == 404
      ) {
        this.message += ' thất bại.';
        this.logo = 'error';
      } else if (
        status == 500 ||
        status == 501 ||
        status == 502 ||
        status == 503 ||
        status == 504
      ) {
        this.message = 'Lỗi máy chủ.';
        this.logo = 'error';
      }

      this.showToast = true;
      setTimeout(() => {
        this.hide();
      }, 3000);
    },
    hide() {
      this.showToast = false;
      this.message = '';
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
  padding: 10px 15px;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
}

.logo {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: white;
}

.logo-warning {
  margin-right: 12px;
  width: 20px;
  height: 20px;
  background: url('../assets/icon/Sprites.svg') -593px -145px;
}

.logo-error {
  margin-right: 12px;
  width: 20px;
  height: 20px;
  background: url('../assets/icon/Sprites.svg') -538px -146px;
}

.logo-info {
  margin-right: 12px;
  width: 20px;
  height: 20px;
  background: url('../assets/icon/Sprites.svg') -482px -146px;
}
</style>
