<template>
   <div class="main-search-input">

<div class="main-search-input-item location">
  <div id="autocomplete-container">
    <input id="autocomplete-input" type="text" placeholder="Location">
  </div>
  <a href="#"><i class="fa fa-map-marker"></i></a>
</div>

<button class="button" @click="handleSearch">Search</button>
<!-- <router-link class="button"  :to="{ name: 'room-detail', params: { roomId: 'abc' } }">Search</router-link> -->

</div>
</template>

<script lang="js">
import router from "../router";
export default {
  methods:{
    handleSearch(){
      router.push('/rooms')
    }
  }
}
</script>

<style>

</style>