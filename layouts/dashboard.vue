<template>
  <div>
    <Header />
    <div class="content-dashboard">
      <Sidebar />
      <div class="p-3">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/dashboard/Sidebar.vue";
import Header from "@/components/dashboard/Header.vue";

export default {
  components: {
    Sidebar,
    Header,
  },
};
</script>
<style>
.content-dashboard{
    display:grid;
    grid-template-columns: 10% 90%;
}
</style>