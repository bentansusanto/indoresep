<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light fixed-top shadow">
        <div class="container-fluid nav">
            <a class="navbar-brand" href="#">
                <img :src="logo" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-5">
                <router-link to="/" class="nav-link">Home</router-link>
                <router-link to="/about" class="nav-link">About Us</router-link>
                <router-link to="/food" class="nav-link">Makanan</router-link>
                <router-link to="/trip" class="nav-link">Destinasi</router-link>  
            </div>
            </div>
        </div>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return {
            logo : require('../assets/logo1.png')
        }
    }
}
</script>
<style scoped>
    .nav-link{
        font-weight: 500;
    }
    .nav-link:hover{
        color: #364BA0 !important;
        font-weight: 500;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .nav-link{
            margin-left: 20px;
        }
        .nav{
            margin-left: 100px;
        }
        .navbar-brand{
            margin-left: unset;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .navbar-brand{
            margin-left: 50px;
        }
        .nav-link{
            margin-left: 20px;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        .nav-link{
            margin-left: unset;
        }
        .navbar-brand img{
            width: 150px;
        }
        .navbar-brand{
            margin-left: 10px;
        }
    }
</style>