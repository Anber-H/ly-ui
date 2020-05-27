<template>
  <div id="app">
    <div class="row">
      <ly-button>默认按钮</ly-button>
      <ly-button type="primary">主要按钮</ly-button>
      <ly-button type="success">成功按钮</ly-button>
      <ly-button type="info">信息按钮</ly-button>
      <ly-button type="warning">警告按钮</ly-button>
      <ly-button type="danger">危险按钮</ly-button>
    </div>
    <div class="row">
      <ly-button plain>默认按钮</ly-button>
      <ly-button plain type="primary">主要按钮</ly-button>
      <ly-button plain type="success">成功按钮</ly-button>
      <ly-button plain type="info">信息按钮</ly-button>
      <ly-button plain type="warning">警告按钮</ly-button>
      <ly-button plain type="danger">危险按钮</ly-button>
    </div>
    <div class="row">
      <ly-button round @click="fn">默认按钮</ly-button>
      <ly-button round icon="yl-icon-search" type="primary">主要按钮</ly-button>
      <ly-button round type="success">成功按钮</ly-button>
      <ly-button round type="info">信息按钮</ly-button>
      <ly-button round type="warning">警告按钮</ly-button>
      <ly-button round type="danger">危险按钮</ly-button>
    </div>
    <div class="row">
      <ly-button disabled @click="fn">disabled</ly-button>
      <ly-button disabled icon="icon-search" type="primary">主要按钮</ly-button>
      <ly-button disabled type="success">成功按钮</ly-button>
      <ly-button disabled type="info">信息按钮</ly-button>
      <ly-button disabled type="warning">警告按钮</ly-button>
      <ly-button disabled type="danger">危险按钮</ly-button>
    </div>
    <div class="row">
      <ly-button circle icon="icon-search"></ly-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn () {
      console.log('按钮')
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .ly-button {
    margin-right: 20px;
  }
}
</style>
