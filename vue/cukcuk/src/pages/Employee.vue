<template>
  <main id="employee">
    <h1>Danh sách nhân viên</h1>
    <Table></Table>
  </main>
</template>

<script>
import Table from '../components/Table.vue';

/* eslint-disable */
export default {
  name: 'Employee',
  components: {
    Table,
  },
};
</script>

<style scoped>
#employee {
  padding: 12px;
  background-color: var(--gray-1);
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
