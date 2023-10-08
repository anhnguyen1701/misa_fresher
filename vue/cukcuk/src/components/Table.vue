<template>
  <div class="table">
    <div class="header">
      <div class="left">
        <span class="header--selected">Đã chọn</span>
        <span class="header--selected--count">1005</span>
        <span class="header--cancel--selected">Bỏ chọn</span>
        <button class="btn-delete">
          <span class="material-symbols-outlined icon"> delete </span>
          <span>Xóa tất cả</span>
        </button>
      </div>
      <div class="right">
        <button class="btn-add">
          <span class="icon"></span>
          <span> Thêm mới </span>
        </button>
      </div>
    </div>
    <div class="main">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" class="checkbox" /></th>
            <th>Mã nhân viên</th>
            <th>Họ tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Số tiền nợ</th>
            <th>Địa chỉ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" v-bind:key="item.id">
            <td><input type="checkbox" class="checkbox" /></td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.dob }}</td>
            <td>{{ item.balance }}</td>
            <td>{{ item.address }}</td>
            <td class="table__tooltip">
              <button class="table__tooltip--icon1">
                <span class="material-symbols-outlined"> edit </span>
              </button>
              <button class="table__tooltip--icon2">
                <span class="material-symbols-outlined"> more_horiz </span>
              </button>
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
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Table',
  data() {
    return {
      items: [
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
        {
          id: 'nvcc',
          name: 'nvcc',
          gender: 'nam',
          dob: '11/91/200',
          balance: '1,000,000',
          address: 'Ha noi',
        },
      ],
    };
  },
};
</script>

<style scoped>
.table {
  background-color: #fff;
  width: 98%;
  height: 92%;
  padding: 10px;
  margin-top: 16px;
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
  text-align: center;
  height: 48px;
}

tr:hover {
  background-color: var(--tbl-hover);
}

.main {
  margin-top: 12px;
  /* min-height: 100px; */
  max-height: 72vh;
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
</style>
