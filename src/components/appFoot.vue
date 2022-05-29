<template>
       <footer>
            <div class="bawahs">
                <div class="container">
                    <div class="row bawah">
                        <div class="col-12 col-md-6 bawah1">
                            <img :src="logo">
                            <p class="mt-4 w-50" style="font-size: .9rem;">{{content}}</p>
                            <div class="row">
                                <div v-for="social in socials" :key="social" class="col-4 col-md-1">
                                    <a style="text-decoration: none;" href="">
                                        <img :src="social.image">
                                    </a>
                                </div>
                            </div>
                            <div class="mt-3" style="font-size: .9rem;">
                                Copyright &copy; {{currentYear}}&nbsp; {{made}}&nbsp; All Can Deserve
                            </div>
                        </div>
                        <div class="col-12 col-md-2 mt-3 bawah2">
                            <h5>Links</h5>
                            <router-link to="/" style="text-decoration: none; color: #000; font-size: .9rem;" class="mt-3">Home</router-link><br>
                            <router-link to="/about" style="text-decoration: none; color: #000; font-size: .9rem;">About Us</router-link><br>
                            <router-link to="/food" style="text-decoration: none; color: #000; font-size: .9rem;">Makanan</router-link><br>
                            <router-link to="/trip" style="text-decoration: none; color: #000; font-size: .9rem;">Destinasi</router-link>
                        </div>
                        <div class="col-12 col-md-4 mt-3 bawah3">
                            <h5>Contact Us</h5>
                            <p style="font-size: .9rem;" class="mt-3">021-098-345</p>
                            <p style="font-size: .9rem; margin-top: -5px;">sanstrip@sanstrip.com</p>
                            <p style="font-size: .9rem; margin-top: -5px;">Jl. Raja Isa no.10, Batam</p>
                        </div>
                    </div>
                </div>
             </div> 
       </footer>
</template>
<script>
export default {
    data (){
        return{
            logo : require('../assets/logo-foot.png'),
            content : 'Kami sangat senang jika anda merasa terbantu dengan adanya website kami.',
            socials : [
                {
                    image : 'https://img.icons8.com/material-outlined/30/364BA0/instagram-new--v1.png'
                },
                {
                    image : 'https://img.icons8.com/material-outlined/30/364BA0/whatsapp--v1.png'
                }
            ],
            
            currentYear : new Date(). getFullYear(),
            made : 'Sans Trip'
        }
    }
}
</script>
<style scoped>
    .bawahs{
        background-color: #F5F5F5;
        width: 100%;
        height: 100%
        
        
        ;
        padding: 50px 0;
    }   
    
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){

    }
    /* Large Desktop */
    @media only screen and (max-width: 767px){

    }
</style>