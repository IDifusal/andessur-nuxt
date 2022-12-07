<template>
    <div class="container m-auto pt-20 pb-5">
        <div class="md:flex">
            <div class="w-1/5">
                <ul>
                    <li class="item-list" v-for="item in projects">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div class="w-3/5 text-center">
                <img src="~/assets/ong-andessur-lg.png" alt="" width="50%" class="m-auto" />
                <p class="text-sm md:w-1/2 m-auto">
                    ONG ANDES SUR trabaja constantemente en biodiversidad y ayuda solidaria a niños y jóvenes que
                    necesiten
                    de nosotros.
                </p>
            </div>
            <div class="w-1/5">
                <ul>
                    <li class="item-list" v-for="link in links">
                        {{ link.text }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                'Tableta para tu carpeta',
                'Moda sostenible',
                'Adopta un pueblo'
            ],
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
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.item-list:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #1fa185;
}
</style>