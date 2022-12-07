<template>
  <div>
    <div>
      <div class="flex items-end justify-between">
        <h3 class="text-3xl">Articulos</h3>
        <nuxt-link to="/dashboard/blog/crear">
          <button class="btn text-sm ml-3">
            Nuevo articulo
            <svg width="16" height="16" viewBox="0 0 24 24" class="ml-3">
              <path
                fill="currentColor"
                d="M20.7 7c-.3.4-.7.7-.7 1c0 .3.3.6.6 1c.5.5 1 .9.9 1.4c0 .5-.5 1-1 1.5L16.4 16L15 14.7l4.2-4.2l-1-1l-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6l3.7 3.8L6.8 21H3v-3.8M7 2v3h3v2H7v3H5V7H2V5h3V2h2Z"
              />
            </svg>
          </button>
        </nuxt-link>
      </div>
      <div class="overflow-x-auto mt-5">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Autor</th>
              <th>Fecha de publicacion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getPosts" :key="item.id">
              <th>{{ item.title }}</th>
              <td>{{ item.category }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.date }}</td>
              <td>
                <div class="tooltip" data-tip="Ver">
                  <button class="btn btn-square">
                    <svg width="32" height="32" viewBox="0 0 16 16">
                      <g fill="currentColor" fill-rule="evenodd">
                        <path
                          d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
                        />
                        <path
                          d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
                <div class="tooltip" data-tip="Editar">
                  <nuxt-link :to="`/dashboard/blog/editar/${item.slug}`">
                    <button class="btn btn-square">
                      <svg width="32" height="32" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"
                        />
                      </svg>
                    </button>
                  </nuxt-link>
                </div>
                <div class="tooltip" data-tip="Eliminar">
                  <label
                    for="my-modal-4"
                    class="btn modal-button"
                    @click="activeItem(item)"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"
                      />
                    </svg>
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer text-center">
        <label class="modal-box relative" for="">
          <h3 class="text-2xl font-bold">
            Estas seguro@ de eliminar este post?
            {{ activePost.title }}
          </h3>
          <div class="h-3"></div>
          <button @click="closeModal" class="btn btn-outline btn-warning">
            Cancelar
          </button>
          <button @click="deleteItem()" class="btn btn-primary">Button</button>
        </label>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  layout: "dashboard",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Ttitle",
          category: "Category",
          date: "Fecha publicacion",
          author: "Author",
        },
      ],
      activePost: {
        id: 0,
        title: "",
        category: "",
        date: "",
        author: "",
      },
    };
  },
  computed:{
    getPosts(){
      return this.$store.getters.getPosts
    }
  },
  methods: {
    closeModal() {
      document.getElementById("my-modal-4").checked = false;
    },
    deleteItem() {
      console.log(this.activePost.title);
      this.closeModal();
    },
    activeItem(item) {
      this.activePost = item;
    },
  }
};
</script>