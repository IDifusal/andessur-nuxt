<template>
    <div class="bg-ong">
        <div class="container m-auto">
            <div class="hero w-screen h-screen bg flex">
                <div class="md:w-1/2 hero-title text-white font-extrabold flex md:block flex-col items-center">
                    <h1 class="text-[43px] md:text-7xl text-center md:text-left">
                        {{ title }} <br>
                        <span class="text-primary text-2xl">
                            {{ subtitle }}
                        </span>
                    </h1>
                    <p class="font-normal mt-6 w-5/6 text-center md:text-left">
                        {{ text }}
                    </p>
                </div>
                <div class="md:w-1/2 md:flex items-center">
                    <img src="~/assets/img/ong-andes-sur.png" alt="" class="img-ref">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'ONG Andes Sur,',
            subtitle: 'Expertos en Desarrollo Economico Social Cultural',
            text:"ONG ANDES SUR trabaja constantemente en biodiversidad y ayuda solidaria a niños y jóvenes que necesitende nosotros. Además promovemos el intercambio horizontal de experiencias de la mano preservando el medio ambiente utilizando las 6R's que son reducir, reutilizar, reciclar, redistribuir, reparar y reflexionar .."
        }
    },
}
</script>

<style lang="scss" scoped>
.bg {
    background-image: url('~/assets/bg.png');
    background-size: cover;
}

.hero {
    & h1{
        line-height: .4;
    }
    & p {
        font-size: 18px;
    }
}
.img-ref{
    width: 62%;
}
</style>