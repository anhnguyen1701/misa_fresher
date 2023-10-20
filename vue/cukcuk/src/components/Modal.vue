<template>
  <div id="add-modal" class="add-modal">
    <div class="add-modal-container">
      <div class="row0">
        <h3>Thông tin nhân viên</h3>
        <span @click="close" class="icon material-symbols-outlined">
          close
        </span>
      </div>
      <div class="row1">
        <label class="add-modal-makh modal-lb">
          <span> Mã nhân viên <span style="color: red">*</span> </span>
          <input type="text" class="modal-inp" v-model="data.EmployeeCode" />
          <span class="error" v-if="validate.hasOwnProperty('EmployeeCode')">
            {{ validate.EmployeeCode }}
          </span>
        </label>
        <label class="add-modal-makh modal-lb">
          Họ và tên
          <input type="text" class="modal-inp" v-model="data.FullName" />
          <span class="error" v-if="validate.hasOwnProperty('FullName')">
            {{ validate.FullName }}
          </span>
        </label>
        <label class="add-modal-makh modal-lb">
          Ngày sinh
          <input type="date" class="modal-inp" v-model="data.DateOfBirth" />
        </label>
        <div class="add-modal-gioitinh modal-lb-exc">
          <div class="modal-radio-text">
            <span>Giơi tính</span>
          </div>
          <div class="modal-radio-container">
            <input
              type="radio"
              name="gioitinh"
              value="1"
              class="modal-radio"
              :checked="data.Gender == 1"
              v-model="data.Gender"
            />
            <label>Nam</label>
            <input
              type="radio"
              name="gioitinh"
              value="0"
              :checked="data.Gender == 0"
              v-model="data.Gender"
              class="modal-radio"
            />
            <label>Nữ</label>
            <input
              type="radio"
              name="gioitinh"
              value="2"
              :checked="data.Gender == 2"
              v-model="data.Gender"
              class="modal-radio"
            />
            <label>Khác</label>
          </div>
        </div>
      </div>
      <div class="row2">
        <label class="add-modal-sdt modal-lb">
          Số điện thoại
          <input type="text" class="modal-inp" v-model="data.PhoneNumber" />
          <span class="error" v-if="validate.hasOwnProperty('PhoneNumber')">
            {{ validate.PhoneNumber }}
          </span>
        </label>
        <label class="add-modal-makh modal-lb">
          Số CMTND
          <input type="text" class="modal-inp" v-model="data.IdentityNumber" />
          <span class="error" v-if="validate.hasOwnProperty('IdentityNumber')">
            {{ validate.IdentityNumber }}
          </span>
        </label>
        <label class="add-modal-makh modal-lb">
          Ngày cấp
          <input type="date" class="modal-inp" v-model="data.IdentityDate" />
        </label>
      </div>

      <div class="row3">
        <label class="add-modal-email modal-lb">
          Email
          <input type="text" class="modal-inp" v-model="data.Email" />
          <span class="error" v-if="validate.hasOwnProperty('Email')">
            {{ validate.Email }}
          </span>
        </label>
        <label class="add-modal-noicap modal-lb">
          Nơi cấp
          <input type="text" class="modal-inp" v-model="data.IdentityPlace" />
        </label>
      </div>

      <div class="row4">
        <label class="add-modal-sotienno modal-lb">
          Mức lương cơ bản
          <input type="text" class="modal-inp" v-model="data.Salary" />
        </label>
      </div>

      <div class="row5">
        <label class="add-modal-congty modal-lb">
          Phòng ban
          <input type="text" class="modal-inp" v-model="data.DepartmentName" />
        </label>
      </div>

      <div class="row6">
        <label class="add-modal-diachi modal-lb">
          Địa chỉ
          <input type="text" class="modal-inp" v-model="data.Address" />
        </label>
      </div>
      <div class="row7">
        <button class="btn-huy btn" @click="isShowModal = false">Hủy</button>
        <button
          v-if="this.action == 'add'"
          class="btn-cat btn"
          @click="addEmployee"
        >
          Thêm
        </button>
        <button
          v-if="this.action == 'edit'"
          class="btn-cat btn"
          @click="editEmployee"
        >
          Sửa
        </button>
      </div>
    </div>
    <Dialog ref="dialog"></Dialog>
    <Toast ref="toast"></Toast>
  </div>
</template>

<script>
import Dialog from '../components/Dialog.vue';
import Toast from '../components/Toast.vue';

/* eslint-disable */
export default {
  name: 'Modal',
  components: {
    Dialog,
    Toast,
  },
  props: {
    action: String,
    item: {},
  },
  data() {
    return {
      data: {},
      originData: {},
      validate: {},
    };
  },
  methods: {
    close() {
      this.$emit('closModal');
    },
    convertDOB(dob) {
      let date = new Date(dob);
      let d = date.getDate();
      let m = date.getMonth() + 1;
      let y = date.getFullYear();

      d = d < 10 ? `0${d}` : d;
      m = m < 10 ? `0${m}` : m;
      let res = `${y}-${m}-${d}`;
      return res;
    },

    convertDebitAmount(inp) {
      let res = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'VND',
      }).format(inp);
      return res;
    },

    checkEmptyString(test) {
      if (test == null) return true;
      else if (test == undefined) return true;
      else if (test == '') return true;
      return false;
    },

    validateForm() {
      let {
        EmployeeCode,
        FullName,
        DateOfBirth,
        Gender,
        PhoneNumber,
        IdentityNumber,
        IdentityDate,
        Email,
        IdentityPlace,
        Salary,
        DepartmentName,
        Address,
      } = this.data;
      this.validate = {};

      if (this.checkEmptyString(EmployeeCode)) {
        console.log(EmployeeCode);
        this.validate.EmployeeCode = 'Không được để trống Mã nhân viên';
        // validateList.push('Không được để trống Mã nhân viên');
      }

      if (this.checkEmptyString(FullName)) {
        this.validate.FullName = 'Không được để trống Họ và tên';
        // validateList.push('Không được để trống Họ và tên');
      }

      if (this.checkEmptyString(Email)) {
        this.validate.Email = 'Không được để trống Email';
        // validateList.push('Không được để trống Email');
      }

      if (this.checkEmptyString(PhoneNumber)) {
        this.validate.PhoneNumber = 'Không được để trống Số điện thoại';
        // validateList.push('Không được để trống Số điện thoại');
      }

      if (this.checkEmptyString(IdentityNumber)) {
        this.validate.IdentityNumber = 'Không được để trống Số CMND';
        // validateList.push('Không được để trống Số CMND');
      }

      // let check = validateList.length > 0 ? false : true;
      // return { check, validateList };

      return Object.keys(this.validate).length == 0;
    },

    async addEmployee() {
      if (this.originData == JSON.stringify(this.data)) {
        this.$refs.dialog.show({
          title: 'Thông báo',
          desc: 'Điền các trường để tiếp tục',
          logo: 'warning',
          type: 1,
        });
      } else {
        let check = this.validateForm();

        if (check) {
          const ok = await this.$refs.dialog.show({
            title: 'Thông báo',
            desc: 'Bạn có chắc chắn muốn thêm không?',
            logo: 'warning',
            type: 2,
          });
          if (ok) {
            try {
              let res = await this.axios.post(
                `${process.env.ENDPOINT}/employees`,
                this.data
              );
              this.$refs.toast.show({ message: 'Thêm', status: res.status });
              this.$refs.dialog
                .show({
                  title: 'Thông báo',
                  desc: 'Thêm',
                  type: 3,
                  status: res.status,
                })
                .then(() => {
                  this.close();
                });
            } catch (error) {
              this.$refs.dialog.show({
                title: 'Thông báo',
                logo: 'error',
                desc: error,
                type: 1,
              });
            }
          }
        } else {
          this.$refs.dialog.show({
            title: 'Thông báo',
            desc: 'Sửa để tiếp tục',
            logo: 'warning',
            type: 1,
          });
        }
      }
    },

    async editEmployee() {
      if (this.originData == JSON.stringify(this.data)) {
        this.$refs.dialog.show({
          title: 'Thông báo',
          desc: 'Không có thay đổi',
          logo: 'warning',
          type: 1,
        });
      } else {
        let check = this.validateForm();
        if (check) {
          const ok = await this.$refs.dialog.show({
            title: 'Thông báo',
            desc: 'Bạn có chắc chắn thay đổi không?',
            logo: 'warning',
            type: 2,
          });
          if (ok) {
            try {
              let res = await this.axios.put(
                `${process.env.ENDPOINT}/employees/${this.data.EmployeeId}`,
                this.data
              );
              this.$refs.toast.show({ message: 'Sửa', status: res.status });
              this.$refs.dialog
                .show({
                  title: 'Thông báo',
                  desc: 'Sửa',
                  type: 3,
                  status: res.status,
                })
                .then(() => {
                  this.close();
                });
            } catch (error) {
              this.$refs.dialog.show({
                title: 'Thông báo',
                desc: error,
                logo: 'error',
                type: 1,
              });
              console.log(error);
            }
          }
        } else {
          this.$refs.dialog.show({
            title: 'Thông báo',
            desc: 'Sửa để tiếp tục',
            logo: 'warning',
            type: 1,
          });
        }
      }
    },
  },
  created() {
    this.data = this.item;
    try {
      let dob = this.data.DateOfBirth;
      let iDate = this.data.IdentityDate;

      if (dob != null && dob != '' && dob.length > 0) {
        this.data.DateOfBirth = this.convertDOB(dob);
      }

      if (iDate != null && iDate != '' && iDate.length > 0) {
        this.data.DateOfBirth = this.convertDOB(iDate);
      }

      this.originData = JSON.stringify(this.data);
    } catch (error) {}
  },
};
</script>

<style scoped>
.add-modal {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.add-modal-container {
  margin: auto;
  background-color: #fff;
  position: relative;
  top: 15%;
  min-width: 600px;
  border-radius: 5px;
  /* min-height: 600px; */
  width: fit-content;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 500;
}
.add-modal-container h3 {
  font-size: 16px;
  margin: 7px;
  font-weight: 600;
}

.modal-inp:focus {
  border-color: #50b83c;
}

.modal-inp {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  height: 36px;
  padding: 1rem;
  margin-top: 0.3rem;
  outline: none;
}

.row0,
.row1,
.row2,
.row3,
.row4,
.row5,
.row6,
.row7 {
  display: flex;
}

.modal-lb-exc {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
}

.modal-radio {
  margin-top: 0.3rem;
}

.modal-radio input {
  /* margin: 0 0.5rem; */
}

.modal-lb {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  flex-shrink: 1;
}

.add-modal-sdt,
.add-modal-noicap,
.add-modal-email {
  width: 50%;
}

.add-modal-congty,
.add-modal-diachi,
.add-modal-sotienno {
  width: 100%;
}

.row7 {
  justify-content: end;
  /* background-color: #f4f4f4; */
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 0.5rem;
}

.btn {
  width: 6rem;
  height: 36px;
  border-radius: 4px;
  border: 0px;
  cursor: pointer;
}

.btn-cat {
  background-color: #50b83c;
  color: #ffffff;
}

.btn-huy {
  color: black;
  background-color: white;
  margin-right: 0.5rem;
  border: 1px solid #a5a0a0;
}

.row0 {
  align-items: center;
  justify-content: space-between;
}

.row0 .icon {
  color: red;
  display: block;
  cursor: pointer;
}

.modal-radio-container {
  display: flex;
  height: 100%;
  align-items: center;
}

.modal-radio {
  margin-right: 5px;
}

.modal-radio-container label {
  margin-right: 12px;
}

.modal-radio {
  width: 24px;
  height: 24px;
}

.error {
  color: red;
  font-size: 10px;
}
</style>
