<template lang="">
  <div id="add-modal" class="add-modal">
    <div class="add-modal-container">
      <div class="row0">
        <h3>Thông tin khách hàng</h3>
        <span
          onclick="document.getElementById('add-modal').style.display='none'"
          class="icon material-symbols-outlined"
        >
          close
        </span>
      </div>
      <div class="row1">
        <label class="add-modal-makh modal-lb">
          <span> Mã khách hàng <span style="color: red">*</span> </span>
          <input type="text" class="modal-inp" />
        </label>
        <label class="add-modal-makh modal-lb">
          Họ và tên
          <input type="text" class="modal-inp" />
        </label>
        <label class="add-modal-makh modal-lb">
          Ngày sinh
          <input type="date" class="modal-inp" placeholder="mm/dd/yyyy" />
        </label>
        <div class="add-modal-gioitinh modal-lb-exc">
          <div class="modal-radio-text">
            <span>Giơi tính</span>
          </div>
          <div class="modal-radio">
            <input
              type="radio"
              name="gioitinh"
              value="Nam"
              class="modal-radio"
            />
            <label>Nam</label>
            <input
              type="radio"
              name="gioitinh"
              value="Nữ"
              class="modal-radio"
            />
            <label>Nữ</label>
            <input
              type="radio"
              name="gioitinh"
              value="Khác"
              class="modal-radio"
            />
            <label>Khác</label>
          </div>
        </div>
      </div>
      <div class="row2">
        <label class="add-modal-sdt modal-lb">
          Số điện thoại
          <input type="text" class="modal-inp" />
        </label>
        <label class="add-modal-makh modal-lb">
          Số CMTND
          <input type="text" class="modal-inp" />
        </label>
        <label class="add-modal-makh modal-lb">
          Ngày cấp
          <input type="date" class="modal-inp" placeholder="dd/mm/yyyy" />
        </label>
      </div>

      <div class="row3">
        <label class="add-modal-email modal-lb">
          Email
          <input type="text" class="modal-inp" />
        </label>
        <label class="add-modal-noicap modal-lb">
          Nơi cấp
          <input type="text" class="modal-inp" />
        </label>
      </div>

      <div class="row4">
        <label class="add-modal-sotienno modal-lb">
          Số tiền nợ
          <input type="text" class="modal-inp" />
        </label>
      </div>

      <div class="row5">
        <label class="add-modal-congty modal-lb">
          Công ty
          <input type="text" class="modal-inp" />
        </label>
      </div>

      <div class="row6">
        <label class="add-modal-diachi modal-lb">
          Địa chỉ
          <input type="text" class="modal-inp" />
        </label>
      </div>
      <div class="row7">
        <button
          class="btn-huy btn"
          onclick="document.getElementById('add-modal').style.display='none'"
        >
          Hủy
        </button>
        <button class="btn-cat btn">Cất</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Modal',
};
</script>
<style lang=""></style>
