<template>
        <div class="abouts">
            <div class="row about">
                <div class="col-12 col-md-5">
                    <img :src="abouts.image">
                </div>
                <div class="col-12 col-md-4 about1">
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
    @import '../css/style.css';
</style>