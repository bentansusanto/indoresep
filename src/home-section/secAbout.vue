<template>
        <div class="abouts">
            <div class="row about">
                <div class="col-12 col-md-5">
                    <img :src="abouts.image">
                </div>
                <div class="col-12 col-md-4">
                    <h2>{{abouts.head}}</h2>
                    <p>{{abouts.content[0]}}</p>
                    <p>{{abouts.content[1]}}</p>
                    <router-link to="/about" class="btn">Read more</router-link>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props :{
        abouts:Object,
    }
}
</script>
<style scoped>
    .abouts{
        margin-top: 300px;
    }
    .about h2{
        font-weight: 600;
    }
    .about p{
        color: #a4a4a4;
        font-weight: 400;
    }
    .btn{
        margin-top: 20px;
        background-color: #364BA0;
        color: #ffff;
        text-decoration: none;
        border: unset;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .about img{
            width: 80%;
        }
        .about h2, .about p{
            text-align: left;
            margin: unset;
        }
        .about h2{
            font-size: 3rem;
        }
        .about p{
            font-size: .9rem;
            width: 100%;
        }
        .about p:nth-child(2){
            padding-top: 20px;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .about img{
            width: 100%;
        }
        .about h2, .about p{
            text-align: left;
            margin: unset;
        }
        .about h2{
            font-size: 2rem;
        }
        .about p{
            font-size: .9rem;
            width: 100%;
        }
        .about p:nth-child(2){
            padding-top: 20px;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        .about img{
            width: 80%;
        }
        .about h2, .about p{
            text-align: center;
            margin: auto;
        }
        .about h2{
            font-size: 2rem;
        }
        .about p{
            font-size: .9rem;
            width: 75%;
        }
        .about p:nth-child(2){
            padding-top: 20px;
        }
    }
</style>