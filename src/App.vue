<template>
  <div id="app">
    <movieNav></movieNav> 
    <router-view/>
    
  </div>
    
</template>

<script>
import movieNav from '@/components/movieNav.vue'
export default {
  name: 'App',
  components: {movieNav}
}
</script>

<style>
  *{
    padding:0;
    margin:0;
    list-style: none;
  }
</style>
