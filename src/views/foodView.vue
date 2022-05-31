<template>
    <div class="foods">
        <div class="container">
            <h1 class="text-center">Kumpulan Makanan Khas<br>Batam dan Resepnya</h1>
        </div>
    </div>
    <secFood/>
    <div class="food my-5 mx-auto">
        <div class="container">
            <div class="row ">
                <div v-for="resep in reseps" :key="resep.id" class="col-12 col-md-4">
                    <div class="card" style="width: 15rem; height: 12rem">
                        <img :src="'/assets/image/' + resep.image" class="card-img-top" style="width: 100%; height: 70%;">  
                        <div class="card-body">
                            <h6 class="text-bold">{{resep.name}}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import secFood from '../Food/secFood.vue'
import axios from 'axios'
export default {
    components: {
        secFood
    },
     data (){
        return{
            reseps :[],
        }
    },

    created(){
        axios.get(`http://127.0.0.1:8000/api/reseps`)
        .then( response => {
                this.reseps = response.data.data;
                console.log(response.data)
            })
        .catch (err => {
            console.log(err.response.data); // this is the main part. Use the response property from the error object
        })
    }


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