<template>
  <div class="drawer drawer-mobile bg-black">
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto text-base-content">
        <!-- Sidebar content here -->
        <li v-for="(item,index) in links" :key="index">
          <nuxt-link class="text-white hover:text-hoverdash" :to="item.link">{{item.name}}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links:[
        {
          name:'General',
          link:'/dashboard'
        },
                {
          name:'Blog',
          link:'/dashboard/blog'
        },
                {
          name:'Productos',
          link:'/dashboard/productos'
        }
      ]
    }
  },
}
</script>