<template>
    <app-nav/>
    <router-view/>
    <app-foot/>
</template>

<script>
import appNav from './components/appNav.vue'
import appFoot from './components/appFoot.vue'

export default {
  name: 'App',
  components: {
    appNav,
    appFoot,
  }
}
</script>

