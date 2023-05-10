<template>
  <header
    :class="ticking ? 'ontop' : 'scroll'"
    v-motion-fade-visible
    class="header w-full"
    v-show=isMobile
  >
    <div class="header__container container flex m-auto">
      <div class="header__icon w-1/3">
        <img @click="goHome" src="~/assets/ongadessur-logo2.png" class="cursor-pointer">
      </div>
      <div class="header__menu w-2/3 hidden md:flex">
        <a v-for="(item, index) in links" :key="index" :href="item.link">{{
          item.text
        }}</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      ticking: true,
      links: [
        {
          text: 'Inicio',
          link: '#',
        },
        {
          text: 'Productos',
          link: '#productos',
        },
        {
          text: 'Servicios',
          link: '#servicios',
        },
        {
          text: 'Contacto',
          link: '#contacto',
        }        
      ],
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.handleScroll)
  },
  mounted() {
    this.scrollTrigger()
  },
  computed:{
    isMobile(){
      if(process.client){
        let width = window.innerWidth
        if(width >650){
          return true
        }else{
          return false
        }
      }
    }
  },
  methods: {
    goHome(){
      this.$router.push("/")
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    scrollTrigger() {
      window.onscroll = () => {
        if (document.documentElement.scrollTop == 0) {
          this.ticking = true
        } else {
          this.ticking = false
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  padding: 20px;
  transition: ease all 0.5s;
  transition: background-color 500ms linear;
  overflow-x: hidden;
  & img{
    width: 100px;
  }
  &.scroll {
    position: sticky;
    top: 0;
    background: white;
    color: black;
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
      & img{
    width: 50px;
  }
  }

  &.ontop {
    color: white;
    position: fixed;
  }
  z-index: 9;
  &__container {
    justify-items: center;
  }
  &__menu {
    justify-content: space-between;
    align-items: center;
  }
}
</style>