<template>
    <div class="rewards">
        <div class="container">
            <div class="row reward w-60">
                <div v-for="rating in ratings" :key="rating" class="col-12 col-md-4 reward1">
                    <img :src="rating.image">
                    <h5 class="pt-3">{{rating.title}}</h5>
                    <p>{{rating.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props :{
        ratings:Object
    }
}
</script>
<style scoped>
    .rewards{
        margin-top: 200px;
    }
    .reward{
        text-align: center;
    }
    .reward p{
        color: #a4a4a4;
        font-size: .9rem;
    }

    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .reward1{
            margin: auto;
        }
        .reward p{
            width: 250px;
            margin: auto;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .reward1{
            margin: auto;
        }
        .reward p{
            width: 80%;
            margin: auto;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        .reward1{
            margin: 20px auto;
        }
        .reward p{
            width: 300px;
            margin: auto;
        }
    }
</style>