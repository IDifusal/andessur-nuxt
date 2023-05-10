<template>
  <div class="container m-auto md:mt-10" @click="goProducts">
    <h3>Productos</h3>
    <div
      class="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-6 py-10"
    >
      <div
        v-for="item in items"
        class="card w-96 bg-base-100 shadow-md hover:shadow-2xl relative"
      >
        <figure><img :src="item.img" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.title }}</h2>
          <p>{{ item.desciption }}</p>
          <div class="card-actions justify-end cursor-pointer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Producto 1",
          desciption: "Qui anim pariatur non pariatur cillum eiusmod sunt ipsum. Eiusmod magna do reprehenderit est id cillum sint officia excepteur laborum nulla mollit consequat esse. Proident ad enim veniam magna",
          img: "https://placeimg.com/400/225/book",
        },
        {
          title: "Producto 2",
          desciption: "Qui anim pariatur non pariatur cillum eiusmod sunt ipsum. Eiusmod magna do reprehenderit est id cillum sint officia excepteur laborum nulla mollit consequat esse. Proident ad enim veniam magna",
          img: "https://placeimg.com/400/225/arch",
        },
        {
          title: "Producto 3",
          desciption: "Qui anim pariatur non pariatur cillum eiusmod sunt ipsum. Eiusmod magna do reprehenderit est id cillum sint officia excepteur laborum nulla mollit consequat esse. Proident ad enim veniam magna",
          img: "https://placeimg.com/400/225/arch",
        },
      ],
    };
  },
  methods:{
    goProducts(){
      this.$router.push('productos-solidarios')
    }
  }
};
</script>

<style lang="scss" scoped></style>
