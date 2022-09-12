<template>
  <div class="drawer drawer-mobile">
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li>
          <nuxt-link to="/dashboard">General</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/dashboard/blog">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/dashboard/productos">Productos</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>