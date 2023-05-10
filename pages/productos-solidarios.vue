<template>
  <div class="wrap">
    <div class="bg-primary">
      <div class="sec-1 p-3 md:p-0 md:flex">
        <div class="md:w-1/2 md:p-6 flex flex-col justify-center">
          <h3 class="text-white">Ayudanos a ayudar</h3>
          <p class="md:w-2/3">
            En la ONG andes sur tenemos variadas formas para que colabores con
            nuestra causa ¡sólo elige la tuya!
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="~/assets/0.jpeg" alt="" />
        </div>
      </div>
    </div>
    <div class="section-2 mt-20 text-center md:flex gap-x-20 relative">
      <div class="md:w-1/3">
        <img src="~/assets/1.jpeg" alt="" />
        <h3>01</h3>
        <h2>COMPRA SOLIDARIA</h2>
        <p>
          Cada que compres un producto en las tiendas de nuestros auspiciadores
          un porcentaje estará siendo donado para ayudar a nuestros proyectos
        </p>
        <button class="btn btn-primary w-30 mt-10 text-white">
          VER TIENDAS
        </button>
      </div>
      <div class="md:w-1/3 mt-10">
        <img src="~/assets/2.jpeg" alt="" />
        <h3>02</h3>
        <h2>VOLUNTARIADO</h2>
        <p>
          Donar tu tiempo para apoyar a otras personas es lo más valioso que
          podemos recibir, si deseas apoyarnos en nuestros proyectos estaremos
          agradecidos , te esperamos!
        </p>
        <button class="btn btn-primary w-30 mt-10 text-white">
          COLABORA AQUI
        </button>
      </div>
      <div class="md:w-1/3 mt-20">
        <img src="~/assets/3.jpeg" alt="" />
        <h3>01</h3>
        <h2>DONACIONES</h2>
        <p>
          Cada donación por más pequeña que sea , ayuda a que cada uno de
          nuestros proyectos se hagan realidad .
        </p>
        <button class="btn btn-primary w-30 mt-10 text-white">DONA AQUI</button>
      </div>
    </div>
    <div class="spacer">

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 0 3rem;
}
.spacer {
  height: 170px;
}
@media(min-width:750px){
  .section-2::after{
    position: absolute;
    content:'';
    width: 50%;
    height: 73%;
    background-color: #1fa185;
    right: 0;
    z-index: -1;
}
}
</style>
