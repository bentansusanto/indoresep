<template>
    <div class="abouts">
            <div class="row about">
                <div class="col-12 col-md-5">
                    <img :src="image">
                </div>
                <div class="col-12 col-md-4 about1">
                    <h2>{{title}}</h2>
                    <p>{{content[0]}}</p>
                    <p class="mt-2">{{content[1]}}</p>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
                title : 'About Us',
                content : ['Sans trip adalah website yang menyediakan info mengenai destinasi paling populer di Batam dan juga makanan yang paling sering di cari orang.Kami juga memberikan info resep-resep dari makanan yang paling dicari orang. Sehingga anda dapat mencoba sendiri di rumah.','Harapan kami adalah bisa membantu turis atau teman-teman semua yang mau berencana jalan-jalan kebatam, dan bisa menikmati indahnya kota Batam bukan hanya tempat-tempat wisata tetapi juga makanan khasnya.'],
                image : require('../assets/img-home/bg-about.png')
        }
    }
}
</script>
<style scoped>
    @import '../css/style.css';
</style>