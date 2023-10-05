<template>
  <body>
    <div class="container">
      <Header></Header>

      <Aside></Aside>

      <main>
        <div class="main__header">
          <h2>Trang chủ</h2>
          <Table></Table>
        </div>
      </main>

      <Modal></Modal>
    </div>
  </body>
</template>

<script>
import Header from '../components/Common/Header.vue';
import Aside from '../components/Common/Aside.vue';
import Table from '../components/Common/Table.vue';
import Modal from '../components/Common/Modal.vue';

/* eslint-disable */
export default {
  name: 'Homepage',
  components: {
    Header,
    Aside,
    Table,
    Modal,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
