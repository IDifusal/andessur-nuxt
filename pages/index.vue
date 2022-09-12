<template>
  <div>
    <div>
      <h1 class="text-5xl py-3 text-center">BIEVENIDOS A ONG ANDES SUR</h1>
      <h2 class="py-3 px-3 text-center">
        ONG ANDES SUR trabaja constantemente en biodiversidad y ayuda solidaria
        a niños y jóvenes que necesiten <br />de nosotros. Además promovemos el
        intercambio horizontal de experiencias de la mano preservando el <br />
        medio ambiente utilizando las 6R's que son reducir, reutilizar,
        reciclar, redistribuir, reparar y reflexionar .
      </h2>
      <div class="my-6 text-center text-xs-center">
        <button to="/nosotros" class="btn btn-accent">Mas informacion</button>
      </div>
      <!--CARDS -->
      <div>
        <template>
          <div class="md:flex justify-center">
            <div
              class="mx-8 content-center flip-card"
              v-for="card in cards"
              :key="card.title"
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h2>{{ card.title }}</h2>
                </div>
                <div class="flip-card-back p-3">
                  <h3 class="text-sm">{{ card.content }}</h3>
                </div>
              </div>
            </div>
          </div>
          <!-- PROYECTOS -->
          <div class="md:flex justify-center py-12 md:py-12 fondo1">
            <img
              src="https://dc583.4shared.com/img/HtVJLxOpiq/s23/178f68b0810/proyectos"
              alt=""
              class="proyectos m-auto md:m-0"
            />

            <div
              class="
                px-4
                text-center text-xs-center
                flex flex-wrap
                content-center
                justify-center
              "
            >
              <h3 class="text-3xl my-4">
                Comprometidos con el desarrollo del sur
              </h3>
              <br />
              <h4 class="text-center my-2">
                La pandemia del COVID-19 ha generado un cambio en las
                actividades <br />
                que el hombre desarrolla con normalidad como acudir a su centro
                de estudios.<br />
                Conoce más de nuestros proyectos
              </h4>
              <button to="/proyectos" class="btn btn-accent">
                Ver Proyectos
              </button>
            </div>
          </div>
          <!-- servicios -->
          <div class="md:px-16">
            <h1 class="text-center text-4xl p-8">SERVICIOS</h1>

            <div class="md:flex justify-center">
              <div class="card-new" max-width="344">
                <img
                  src="https://static.wixstatic.com/media/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.jpg/v1/fill/w_443,h_376,al_c,q_80,usm_0.66_1.00_0.01/15a549_cc6d3c98b2e0477cac5084a3771a060b~mv2.webp"
                  height="200px"
                />

                <h2>Asesoría de Tesis</h2>

                <div class="in-text">
                  <p>
                    Por lo cual se ofrece el servicio de asesoría en: Plan de
                    Tesis Informe final de la investigación Asesorías de tesis
                    por etapas: Recolección de información Planteamiento del
                    problema Marco teorico Hipótesis Metodologia Analisis de
                    Resultados Conclusiones y recomendaciones Anexos
                  </p>
                  <button to="/contacto" class="btn btn-accent">
                    Mas informacion
                  </button>
                </div>
              </div>

              <v-card class="card-new" max-width="344">
                <img
                  src="http://www.preydfis.com.mx/wp-content/uploads/2018/08/gestion-empresarial.jpg"
                  height="200px"
                />
                <h2>Asesoria en Gestión Empresarial</h2>
                <div class="in-text" v-show="show">
                  <p>
                    Ong Andessur, realiza asesorías en Gestión empresarial para
                    MIPYMES, en sus diferentes áreas empresariales:• Gestión
                    Administrativa • Recurso Humanos • Gestión Financiera •
                    Logística • Marketing y redes sociales• Desarrollo y proceso
                    de producto/servicio Área Legal
                  </p>
                  <button to="/contecto" class="btn btn-accent">Button</button>
                </div>
              </v-card>
              <div>
                <img
                  src="https://eiposgrado.edu.pe/wp-content/uploads/2019/07/BLOG-PORTADA.png"
                  height="200px"
                />

                <h3>Asesoría en Gestión Pública</h3>
                <div class="in-text" v-show="show">
                  <p>
                    Dada la experiencia precedida de la ONG Andessur, realiza
                    consultoría y asesoramiento para desarrollar y llevar a cabo
                    proyectos para el sector público (Municipalidades locales y
                    distritales)
                  </p>
                  <button to="/contacto" class="btn btn-accent">
                    Mas informacion
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="banner-2 text-center">
            <img
              src="https://dc613.4shared.com/img/OQbb5Ruriq/s24/17a5ae019d0/banner-2-ong-andes-sur?async&rand=0.4592375194773455.jpg"
              alt=""
              class="mx-auto"
            />
          </div>
          <!-- PRONTO ARTICULOS -->
          <div class="h-72 pronto flex items-center justify-center">
            <h1 class="text-center text-4xl">
              Pronto nuestros acticulos de opinión
            </h1>
          </div>
          <!-- sercicio tesis -->
          <div class="md:flex justify-center fondo2 md:pt-24 my-12">
            <div>
              <h2
                class="
                  script
                  px-4
                  text-center
                  md:text-right
                  text-xs-center
                  pegado
                "
              >
                🤓 Necesitas ayuda con tu tesis?
              </h2>
              <div class="text-center">
                <button to="/contacto" class="btn btn-accent">
                  Nos comunicamos contigo
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://dc620.4shared.com/img/RThWuV5kiq/s23/1791a5a9e68/Chica2.png"
                alt=""
                width="60%"
                class="img-mirror m-auto md:m-0"
              />
            </div>
          </div>

          <!-- WEBNARS AND SERVICES!-->
          <div class="flex justify-center mt-8">
            <img
              src="https://dc549.4shared.com/img/YftR9OuLea/s23/1790c75cb88/banner2.jpg"
              alt=""
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proyectos img {
  min-width: 90px;
}
.pronto {
  background-image: linear-gradient(
      0deg,
      rgba(54, 149, 235, 1) 0%,
      rgba(255, 255, 255, 0) 93%
    ),
    url(https://dc620.4shared.com/img/LdpljDaOiq/s23/1791a5aa250/intnational_map.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}
.banner1 {
  background-image: url(/img/banner2.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.pegado {
  line-height: 65px;
}
@media (max-width: 600px) {
  svg {
    display: none;
  }
  path {
    display: none;
  }
}
.fondo1 {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='373' height='44.8' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23c79673' stroke-width='1.6' stroke-opacity='0.27'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}
.button.p-5.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--rounded.theme--dark.v-size--default {
  padding: 2rem;
  font-size: 20px;
}
.fondo2 {
  position: relative;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%231fa185' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23ba9774' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23419f81' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23c09d6f' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23629d7e' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23c5a26a' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23849a7a' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23cba864' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23a59877' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23d0ad5f' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23c79673' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23d6b35a' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

.script {
  font-family: "Nanum Pen Script", cursive;
  font-size: 4.5rem;
}
.in-text {
  padding: 10px !important;
}
svg {
  margin-top: -90px !important;
}
.img-mirror {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
  border-radius: 8px;
}
.v-card__text {
  padding: 0 !important;
}

h1,
span,
h3 {
  font-family: "Kadwa", serif;
}
.title-card {
  font-family: "Open Sans", sans-serif;
  font-size: 30px;
}
.theme--light.v-btn.v-btn--has-bg {
  background-color: #ba9774 !important;
  transition: 0.3s;
}
.theme--light.v-btn.v-btn--has-bg:hover {
  background-color: #1fa185 !important;
}
span.v-btn__content {
  color: white;
}
.v-application .grey.lighten-4 {
  background-color: #f5f5f5 !important;
}

hr {
  height: 1.5px;
  border-width: 0;
  color: gray;
  background-color: black;
  margin: auto;
  width: 50%;
}
.proyectos {
  transform: rotate(-3deg);
  border-radius: 5px;
  filter: drop-shadow(0 0 0.75rem grey);
}
.mx-8.content-center.v-card.v-sheet.theme--light {
  margin: 20px;
}
@media (max-width: 650px) {
  .v-window,
  v-image,
  v-window-item {
    height: 150px;
  }
  .v-image__image--cover {
    background-size: contain !important;
  }
  .v-responsive__sizer {
    padding-bottom: 0 !important;
  }

  .v-responsive__content {
    height: 200px !important;
  }
  .v-icon {
    display: none !important;
  }
  .v-image__image {
    height: 150px !important;
  }
  .v-image v-responsive v-carousel__item theme--dark {
    height: 150px !important;
  }
  .card-new.v-card.v-sheet.theme--light {
    margin: auto;
  }
}
@media (min-width: 600px) {
  .card-new.v-card.v-sheet.theme--light {
    margin: 10px;
  }
}
.flip-card {
  background-color: transparent;
  width: 250px;
  height: 250px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
}

.flip-card:focus {
  outline: 0;
}

.flip-card:hover .flip-card-inner,
.flip-card:focus .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
}

.flip-card-front {
  background: linear-gradient(to left, #4364f7, #6fb1fc);
  color: black;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flip-card-back {
  background: linear-gradient(to right, #4364f7, #6fb1fc);
  color: white;
  transform: rotateY(180deg);
  font-size: 16px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "Home",
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
