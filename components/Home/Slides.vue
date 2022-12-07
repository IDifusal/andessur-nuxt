<template>
<div class="slides">
  <agile :dots="false" :navButtons="false"   :autoplay='true' :autoplay-speed="4000">
    <div class="slide">
      <img src="~/assets/home/tableta-para-tu-carpeta.jpeg" alt="">
    </div>
    <div class="slide">
      <img src="~/assets/img/ongandessur-3.png" alt="">
    </div>
    <div class="slide">
      <img src="~/assets/img/ongandessur-2.jpg" alt="">
    </div>
    <div class="slide">
      <img src="~/assets/img/ongandessur-1.png" alt="">
    </div>
  </agile>
</div>
</template>
<style scoped>
.slides{
  overflow-x: hidden;
}
img{
  width: 100%;
}
</style>