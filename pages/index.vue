<template>
  <div>
      <Hero/>
      <SectionOne/>
      <Slides />
      <!-- <Products/> -->
      <Servicios/>
      <Cta/>
  </div>
</template>
<script>
import Slides from "@/components/Home/Slides";
import Hero from "@/components/Home/Hero";
import SectionOne from "@/components/Home/SectionOne.vue";
import Products from "@/components/Home/Products.vue";
import Servicios from "@/components/Home/Servicios.vue";
import Cta from "@/components/Home/Cta.vue";

export default {
  components: {
    Slides,
    Hero,
    SectionOne,
    Products,
    Servicios,
    Cta
  },
  name: "Home",
  layout: 'homepage',
  data() {
    return {
      items: [
        {
          src: "/img/bg1.jpg",
        },
        {
          src: "/img/987634.jpg",
        },
        {
          src: "https://wallpapers.wongcw.com/king-include/uploads/2019/05/d-5572199520.jpg",
        },
        {
          src: "https://i.pinimg.com/originals/76/d1/6d/76d16d967a1bd6577817d39648f8162c.jpg",
        },
      ],
      cards: [
        {
          title: "PROYECTOS",
          content:
            "Nuestros ejes de desarrollo son tres: investigación y desarrollo, gestión empresarial y publica para el desarrollo sostenible y extensión en el ámbito socio-cultural.",
        },
        {
          title: "CLIENTES",
          content:
            "Nuestros servicios van dirigidos tanto a la pequeña y mediana empresa, como tambien a aquellas personas que desean realizar investigacion, ya sea para obtener un grado academico o bien para publicar en revistas cientificas.",
        },
        {
          title: "SERVICIOS",
          content:
            "Asesoria de tesis Ciencias Sociales  Asesoria en Gestion Empresarial    Consultoria en proyectos de sector público",
        },
      ],
      show: true,
    };
  },
};
</script>
