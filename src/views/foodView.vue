<template>
    <div class="foods">
        <div class="container">
            <h1 class="text-center">Kumpulan Makanan Khas<br>Batam dan Resepnya</h1>
        </div>
    </div>
    <secFood/>
</template>
<script>
import secFood from '../Food/secFood.vue'
export default {
    components: {
        secFood
    },
}
</script>
<style scoped>
    .foods{
        background: url('../assets/img-food/bg-food.jpg');
        width: 85%;
        height:80vh;
        background-size: cover;
        background-position: center;
        margin: 0 auto;
        padding: 300px 0;
        color: #fff;
    }
    .foods h1{
        font-weight: 600;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 104px){

    }
    /* Handphone */
    @media only screen and (min-width: 767px){

    }
</style>