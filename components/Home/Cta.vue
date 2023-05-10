<template>
  <div class="bg-ong">
    <div
      class="bg md:py-20 flex justify-center flex-col items-center container m-auto p-4"
    >
      <h3 class="text-center text-white text-2xl md:text-4xl font-normal">
        Contamos con un staff de profesionales <Br></Br>
        Y voluntarios universitarios de primer nivel
      </h3>
      <button @click="redirect" class="btn btn-primary w-30 mt-10 text-white">Productos Solidarios</button>
    </div>
  </div>
</template>

<script>
export
default {
  methods: {
    redirect() {
      this.$router.push("productos-solidarios");
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("~/assets/bg.png");
  background-size: cover;
}
</style>
