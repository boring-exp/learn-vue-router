<template>
  <div class="container">
    <header>{{ userId }}</header>
    <header>{{ $route.params.userId }}</header>
    <div class="body">
      <aside>
        <aside-cop></aside-cop>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script>
import { store } from '@/utils/store'
import AsideCop from '@/components/AsideCop.vue'
export default {
  name: 'MainView',
  components: {
    AsideCop
  },
  // vue-router进行传递
  props: ['userId'],
  mounted() {
    console.log('main组件', store)
    console.log(this.$route.params)
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;

  header {
    height: 60px;
    background-color: #000;
    color: #fff;
  }

  .body {
    height: calc(100% - 60px);
    display: flex;

    aside {
      width: 264px;
      height: 100%;
    }

    main {
      width: calc(100% - 264px);
      overflow-y: auto;
    }
  }

  // main {
  //   width: calc(100% - 264px)
  //   height: 
  // }
}
</style>
