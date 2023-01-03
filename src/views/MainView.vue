<template>
  <div class="container">
    <header>这是头部</header>
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
import AsideCop from '@/components/AsideCop.vue'
export default {
  name: 'MainView',
  components: {
    AsideCop
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
  }

  .body {
    height: calc(100% - 60px);
    display: flex;

    aside {
      width: 264px;
      height: 100%;

      ul {
        overflow-y: auto;
        height: 100%;
      }
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
