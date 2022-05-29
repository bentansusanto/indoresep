<template>
    <div class="destinasis">
        <div class="container">
            <h2>{{head}}</h2>
            <p>{{content}}</p>
                <div class="row mt-5 justify-content-center destinasi">
                    <div v-for="destinasi in destinasis" :key="destinasi" class="col-12 col-sm-6 col-md-5 col-lg-4 mt-4">
                        <div class="image">
                            <img :src="destinasi.image">
                            <div class="description">
                                <h4>{{destinasi.title}}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props :{
        destinasis:Object,
    },
    data (){
        return{
            head : 'Inspiration Destination',
            content : 'Ini adalah sebagian destinasi yang ada di Batam.'
        }
    }
}
</script>
<style scoped>
    .destinasis{
        margin-top: 200px;
        text-align: center;
    }
    .destinasis h2{
        font-weight: 700;
    }
    .destinasis h2{
        font-size: 2rem;
    }
    .destinasis p{
        font-size: .9rem;
        width: 250px;
        margin: auto;
        color: #a4a4a4;
    }
    .destinasi{
        text-align: left;
        width: 88%;
        margin: auto;
    }
    .image{
    margin: auto;
    background: radial-gradient(#111 50%, #000 100%);
    width: 230px;
    height: 150px;
    overflow: hidden;
    position: relative;
    }
    .image img{
        width: 230px;
        transform: scale(1.3);
        transition: all 0.3s ease-out;
    }
    .image:hover img{
    transform: scale(1.1) translateY(-20px);
    opacity: 0.3;
    }
    .description{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 15px;
        text-align: center;
        color: #ffff;
    }
    .description h4{
        font-size: 1rem;
        margin: 0 0 35px;
        transform: translateY(30px);
        padding-bottom: 10px;
        opacity: 0;
        transition: all 0.3s ease-out;
    }
    .image:hover .description h4{
        transform: translateY(0);
        opacity: 1;
    }

    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .destinasi{
            width: 50rem;
            text-align: center;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .destinasi{
            width: 88%;
            text-align: center;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        .destinasi{
            width: 100%;
            text-align: center;
        }
    }
</style>