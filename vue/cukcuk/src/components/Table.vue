<template>
  <div class="table">
    <div class="header">
      <div class="left">
        <span class="header--selected">Đã chọn</span>
        <span class="header--selected--count">{{
          this.checkedItems.length
        }}</span>
        <span class="header--cancel--selected">Bỏ chọn</span>
        <button class="btn-delete" @click="deleteEmployee">
          <span class="material-symbols-outlined icon"> delete </span>
          <span>Xóa tất cả</span>
        </button>
      </div>
      <div class="right">
        <button class="btn-add" @click="showModal('add')">
          <span class="icon"></span>
          <span> Thêm mới </span>
        </button>
      </div>
    </div>
    <div class="main">
      <table>
        <thead>
          <tr>
            <th class="txt-center" style="width: 60px">
              <input type="checkbox" class="checkbox" />
            </th>
            <th class="txt-left">Mã nhân viên</th>
            <th class="txt-left">Họ tên</th>
            <th class="txt-left">Giới tính</th>
            <th class="txt-center">Ngày sinh</th>
            <th class="txt-left">Điện thoại</th>
            <th class="txt-left">Email</th>
            <th class="txt-left">Chức vụ</th>
            <th class="txt-left">Phòng ban</th>
            <th class="txt-left">Mức lương cơ bản</th>
            <th class="txt-left">Tình trạng công việc</th>
            <th class="txt-center" style="width: 100px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" v-bind:key="item.CustomerId">
            <td class="txt-center">
              <input
                type="checkbox"
                class="checkbox"
                @change="toggleItemCheck($event, item)"
              />
            </td>
            <td class="txt-left">{{ item.EmployeeCode }}</td>
            <td class="txt-left">{{ item.FullName }}</td>
            <td class="txt-left">{{ item.GenderName }}</td>
            <td class="txt-center">{{ convertDOB(item.DateOfBirth) }}</td>
            <td class="txt-left">{{ item.PhoneNumber }}</td>
            <td class="txt-left">{{ item.Email }}</td>
            <td class="txt-left">{{ item.PositionName }}</td>
            <td class="txt-left">{{ item.DepartmentName }}</td>
            <td class="txt-left">{{ convertWorkStatus(item.WorkStatus) }}</td>
            <td class="txt-right">
              {{ convertDebitAmount(item.Salary) }}
            </td>

            <td class="txt-center">
              <div class="table__tooltip">
                <button
                  class="table__tooltip--icon1"
                  @click="showModal('edit', item)"
                >
                  <span class="material-symbols-outlined"> edit </span>
                </button>
                <button class="table__tooltip--icon2">
                  <span class="material-symbols-outlined"> more_horiz </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="footer">
      <div class="left">
        <span>Tổng: <strong>100</strong></span>
      </div>
      <div class="right">
        <span class="text1">Số bản ghi/trang</span>
        <span class="page-number">10</span>
        <span class="material-symbols-outlined page-more-icon">
          expand_more
        </span>
        <span class="material-symbols-outlined icon-1"> arrow_back_ios </span>
        <span class="material-symbols-outlined icon-2">
          arrow_forward_ios
        </span>
      </div>
    </div>

    <Modal
      v-if="isModalVisible"
      @closeFromTable="closeModal"
      :action="modalAction"
      :item="modalItem"
    ></Modal>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';

/* eslint-disable */
export default {
  name: 'Table',
  props: {},
  data() {
    return {
      items: [],
      checkedItems: [],
      isModalVisible: false,
      modalAction: '',
      modalItem: {},
    };
  },
  methods: {
    showModal(action, item) {
      this.modalAction = action;
      if (action == 'edit') {
        this.modalItem = item;
      }

      if (action == 'add') {
        this.modalItem = {};
      }

      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    convertGender(x) {
      if (x == 0) return 'Nữ';
      else return 'Nam';
    },
    convertWorkStatus(x) {
      if (x == 0) return 'Đã nghỉ việc';
      else if (x == 1) return 'Đang thử việc';
      else return 'Đang làm việc';
    },
    convertDOB(dob) {
      let date = new Date(dob);
      let d = date.getDate();
      let m = date.getMonth() + 1;
      let y = date.getFullYear();

      d = d < 10 ? `0${d}` : d;
      m = m < 10 ? `0${m}` : m;
      let res = `${d}/${m}/${y}`;
      return res;
    },
    convertDebitAmount(inp) {
      let res = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'VND',
      }).format(inp);
      return res;
    },
    toggleItemCheck(e, item) {
      try {
        if (e.target.checked) {
          this.checkedItems.push(item.EmployeeId);
        } else {
          const i = this.checkedItems.indexOf(item.EmployeeId);
          if (i > -1) {
            this.checkedItems.splice(i, 1);
          }
        }
        console.log(this.checkedItems);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteEmployee() {
      try {
        for (let id of this.checkedItems) {
          await fetch(`https://cukcuk.manhnv.net/api/v1/Employees/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          this.items = this.items.filter((item) => item.EmployeeId != id);
          this.checkedItems = this.checkedItems.filter(
            (checkedId) => checkedId !== id
          );
        }
        alert('xoa thanh cong');
        window.location.reload();
      } catch (e) {
        throw e;
        console.error(e);
      }
    },
  },
  components: {
    Modal,
  },
  mounted() {
    fetch('https://cukcuk.manhnv.net/api/v1/employees')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]);
        this.items = data;
      });
  },

  watch: {},
};
</script>

<style scoped>
.table {
  background-color: #fff;
  width: 98%;
  height: 92%;
  padding: 10px;
  margin-top: 16px;
  border-radius: 3px;
}

.table .header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 500;
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
}

.header--selected {
  margin-right: 5px;
}
.header--selected--count {
  font-weight: 600;
}

.header--cancel--selected {
  font-weight: 600;
  color: red;
}

.header--selected--count,
.header--cancel--selected {
  margin-right: 16px;
}

.btn-add {
  background-color: var(--btn-green);
  height: 36px;
  font-weight: 500;
  color: white;
  padding: 8px 16px 8px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.btn-add .icon {
  background-image: url(../assets/icon/add.png);
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 4px;
}

.btn-delete {
  background-color: var(--gray-2);
  height: 36px;
  font-weight: 500;
  padding: 8px 16px 8px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border: 1px solid #e2e1e1;
}

.btn-delete .icon {
  margin-right: 4px;
  color: red;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table,
tr {
  border: 1px solid #f2f2f2;
}

thead {
  background-color: var(--gray-2);
}

th,
td {
  /* text-align: center; */
  height: 48px;
}

tr:hover {
  background-color: var(--tbl-hover);
}

.main {
  margin-top: 12px;
  /* min-height: 100px; */
  max-height: 66vh;
  overflow-y: scroll;
  border: 1px solid var(--gray-2);
  border-radius: 3px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: 48px;
}

.footer .left {
  display: flex;
  height: 100%;
  align-items: center;
}

.footer .right {
  display: flex;
  height: 100%;
  align-items: center;
}
.right .text1 {
  font-weight: 600;
  margin-right: 12px;
}

.right .page-more-icon {
  margin-right: 12px;
}

.checkbox {
  width: 24px;
  height: 24px;
}

.table__tooltip {
  visibility: hidden;
}

tr:hover .table__tooltip {
  visibility: visible;
}
</style>
