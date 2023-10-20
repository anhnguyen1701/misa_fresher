<template>
  <div class="container" v-if="isShowDialog">
    <div class="dialog-container">
      <h3 class="title">{{ this.title }}</h3>
      <div class="description">
        <div
          class="logo"
          :class="{
            'logo-warning': logo == 'warning',
            'logo-error': logo == 'error',
            'logo-info': logo == 'info',
          }"
        ></div>
        <p>{{ this.desc }}</p>
      </div>
      <div class="row-3" v-if="type == 1">
        <button class="btn btn-1" @click="isShowDialog = false">OK</button>
      </div>
      <div class="row-3" v-if="type == 3">
        <button class="btn btn-1" @click="cancel">OK</button>
      </div>
      <div class="row-3" v-if="type == 2">
        <button class="btn btn-2" @click="cancel">Cancel</button>
        <button class="btn btn-1" @click="confirm">OK</button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Dialog',
  data: () => {
    return {
      isShowDialog: false,
      title: undefined,
      desc: undefined,
      type: undefined, // 1 = alert, 2= confrim 3=ok & close modal
      logo: undefined,

      resolvePromise: undefined,
      rejectPromise: undefined,
    };
  },
  methods: {
    show(opts = {}) {
      this.title = opts.title;
      this.desc = opts.desc;
      this.type = opts.type;
      this.logo = opts.logo;
      this.isShowDialog = true;

      let status = opts.status;

      if (status == 200 || status == 201 || status == 204) {
        this.desc += ' thành công!';
        this.logo = 'info';
      } else if (
        status == 400 ||
        status == 401 ||
        status == 403 ||
        status == 404
      ) {
        this.desc += ' thất bại.';
        this.logo = 'error';
      } else if (
        status == 500 ||
        status == 501 ||
        status == 502 ||
        status == 503 ||
        status == 504
      ) {
        this.desc = 'Lỗi máy chủ.';
        this.logo = 'error';
      }

      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve;
        this.rejectPromise = reject;
      });
    },

    confirm() {
      this.isShowDialog = false;
      this.resolvePromise(true);
    },

    cancel() {
      this.isShowDialog = false;
      this.resolvePromise(false);
    },
  },
  created() {},
};
</script>
<style scoped>
.logo {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: white;
}

.logo-warning {
  margin-right: 12px;
  width: 23px;
  height: 23px;
  background: url('../assets/icon/Sprites.svg') -593px -145px;
}

.logo-error {
  margin-right: 12px;
  width: 23px;
  height: 23px;
  background: url('../assets/icon/Sprites.svg') -538px -146px;
}

.logo-info {
  margin-right: 12px;
  width: 23px;
  height: 23px;
  background: url('../assets/icon/Sprites.svg') -482px -146px;
}

.container {
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog-container {
  position: relative;
  top: 15%;
  left: calc((100% - 400px) / 2);
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
  display: flex;
  align-items: center;
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
