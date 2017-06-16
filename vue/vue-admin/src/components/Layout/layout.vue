<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import vHead from './Header.vue'
  import vSidebar from './Sidebar.vue'
  export default {
    components: {
      vHead,
      vSidebar
    }
  }
</script>

<style lang="scss" type="text/scss">
  .wrapper{
    width: 100%;
    height: 100%;
    background: #5a5050;
    .content{
      margin-left: 180px;
      padding: 20px;
    }
  }
</style>
