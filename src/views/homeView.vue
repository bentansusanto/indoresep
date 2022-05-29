<template>
    <div class="heros">
        <div class="hero"></div>
        <div class="container">
            <h1>{{head[0]}},<br>{{head[1]}}.</h1>
            <p class="pt-3">{{content}}</p>
            <div class="row hero1">
                <div class="col-3 col-md-4 w-50">
                    <a class="btn" href="#">Contact Us</a>
                </div>
                <div class="col-2 col-md-2">
                    <a href=""><img :src="social"></a>
                </div>
                <div class="col-3 col-md-4">
                    <a  href=""><img :src="social1"></a>
                </div>  
            </div>   
        </div>
    </div>

    <secAbout :abouts="about"/>
    <secReward :ratings="reward"/>
    <secDestinasi :destinasis="destinasi"/>
    <div class="pattern"></div>

</template>
<script>
import secReward from '../home-section/secReward.vue'
import secAbout from '../home-section/secAbout.vue'
import secDestinasi from '../home-section/secDestinasi.vue'

export default {
    components : {
        secReward,
        secAbout,
        secDestinasi,
    
    },
    data(){
        return{
            head : ['Hello Visitors', 'Welcome to Sans Trip'],
            content : 'Sans trip memberikan info mengenai trip yang ada di Batam,mulai dari makanan yang khas dan juga destinasi tempat menarik yang ada di Batam.',
            social : 'https://img.icons8.com/material-outlined/30/364BA0/instagram-new--v1.png',
            social1 : 'https://img.icons8.com/material-outlined/30/364BA0/whatsapp--v1.png',
            reward : [
                {
                    title : 'Visitors',
                    desc : 'Lebih dari 16.000 orang mengunjungi website kami.',
                    image : 'https://img.icons8.com/ios/45/364BA0/visit.png'
                },
                {
                    title : 'People Trust',
                    desc : 'Lebih dari 2000 orang mempercayai sebagai website trip terbaik.',
                    image : 'https://img.icons8.com/external-line-lima-studio/50/364BA0/external-trust-motivation-line-lima-studio.png'
                },
                {
                    title : 'Rating Website',
                    desc : 'Website kami sudah mendapat rating diatas 4,5.',
                    image : 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/364BA0/external-reward-shopping-and-ecommerce-flatart-icons-outline-flatarticons.png'
                },
            ],
            about : {
                head : 'About Us',
                content : ['Sans trip adalah website yang menyediakan info mengenai destinasi paling populer di Batam dan juga makanan yang paling sering di cari orang.','Kami juga memberikan info resep-resep dari makanan yang paling dicari orang. Sehingga anda dapat mencoba sendiri di rumah.'],
                image : require('../assets/img-home/bg-about.png')
            },
            destinasi : [
                {
                    title : 'Batam Snorkling',
                    image : require('../assets/img-home/foto.jpg')
                },
                {
                    title : 'Batam Surfing',
                    image : require('../assets/img-home/foto1.jpg')
                },
                {
                    title : 'Batam Go cart',
                    image : require('../assets/img-home/foto2.jpg')
                },
                {
                    title : 'Jembatan Barelang',
                    image : require('../assets/img-home/foto3.jpg')
                },
                {
                    title : 'Batam Cake',
                    image : require('../assets/img-home/foto4.jpg')
                },
                {
                    title : 'Beach Batam',
                    image : require('../assets/img-home/foto5.jpg')
                },
            ]
        }
    }
}
</script>
<style scoped>
    .heros{
        background: url('../assets/img-home/bg-hero.jpg');
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
    }
    .hero{
        background: rgba(255, 255, 255, 0.25);
        height: 100%;
        width: 50%;
        backdrop-filter: blur(5px);
        position: relative;
        z-index: 1;
    }
    .heros h1{
        position: relative;
        z-index: 1;
        font-weight: 700;
    }
    .heros p{
        position: relative;
        z-index: 1;
        color: #323131;
    }
    .hero1{
        position: relative;
        z-index: 1;
    }
    .hero1 a{
        text-decoration: none;
    }
    .btn{
        background-color: #364BA0;
        padding: 6px 12px;
        text-decoration: none;
        color: #ffff;
        border-radius: 5px;
        border: none;
    }
    .pattern{
        background: url('../assets/img-home/pattern.png');
        width: 100%;
        background-size: cover;
        background-position: center;
        height: 100px;
        margin: 200px 0;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .hero{
          width: 50%;
        }
        .heros h1{
            font-size: 2.5rem;
            margin-top: -450px;
        }
        .heros p{
            width: 40%;
        }
         .hero1{
            width: 280px;
        }
        .hero1 a{
            font-size: .9rem;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .hero{
            width: 100%;
        }
        .heros h1{
            font-size: 2rem;
            margin-top: -450px;
        }
        .heros p{
            width: 55%;
        }
         .hero1{
            width: 280px;
        }
        .hero1 a{
            font-size: .9rem;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        .hero{
            width: 100%;
        }
        .heros h1{
            font-size: 2rem;
            margin-top: -450px;
        }
        .heros p{
            width: 100%;
        }
        .hero1{
            width: 280px;
        }
        .hero1 a{
            font-size: .9rem;
        }
    }
</style>