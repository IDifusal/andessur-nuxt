<template>
  <div class="container mt-10 mx-auto p-3 md:p-0">
    <h3>Servicios</h3>
    <div
      class="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-6 py-10"
    >
      <div
        v-for="item in items"
        class="card w-96 bg-base-100 shadow-md hover:shadow-2xl relative"
      >
        <figure><img :src="item.img" :alt="item.title" class="img-service" /></figure>
        <div class="card-body">
          <h2 class="card-title text-ong font-extrabold">{{ item.title }}</h2>
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
          title: "Asesoría de Tesis",
          desciption: "Por lo cual se ofrece el servicio de asesoría en: Plan de Tesis Informe final de la investigación Asesorías de tesis por etapas: Recolección de información Planteamiento del problema Marco teorico Hipótesis Metodologia Analisis de Resultados Conclusiones y recomendaciones Anexos",
          img: "https://static.wixstatic.com/media/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.jpg/v1/fill/w_443,h_376,al_c,q_80,usm_0.66_1.00_0.01/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.webp",
        },
        {
          title: "Asesoria en Gestión Empresarial",
          desciption: "Ong Andessur, realiza asesorías en Gestión empresarial para MIPYMES, en sus diferentes áreas empresariales:• Gestión Administrativa • Recurso Humanos • Gestión Financiera • Logística • Marketing y redes sociales• Desarrollo y proceso de producto/servicio Área Legal",
          img: "https://www.preydfis.com.mx/wp-content/uploads/2018/08/gestion-empresarial.jpg",
        },
        {
          title: "Asesoría en Gestión Pública",
          desciption: "Dada la experiencia precedida de la ONG Andessur, realiza consultoría y asesoramiento para desarrollar y llevar a cabo proyectos para el sector público (Municipalidades locales y distritales)",
          img: "https://www.iydisac.com/images/servicios/asesoria.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.img-service{
  height: 200px;
  width: 100%;
  object-fit: cover;
}
</style>
