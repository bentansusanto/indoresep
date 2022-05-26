<template>
    <app-nav/>
    <router-view/>
</template>

<script>
import appNav from './components/appNav.vue'

export default {
  name: 'App',
  components: {
    appNav,
  }
}
</script>

