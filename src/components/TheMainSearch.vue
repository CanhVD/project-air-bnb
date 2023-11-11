<template>
   <div class="main-search-input">
      <div class="main-search-input-item location">
        <div id="autocomplete-container">
          <input id="autocomplete-input" type="text" placeholder="Location" @input="handleSearch" v-model="locationName">
        </div>
        <a href="#"><i class="fa fa-map-marker"></i></a>
      </div> 
<button class="button" @click="handleSearch">Search</button>
<!-- <router-link class="button"  :to="{ name: 'room-detail', params: { roomId: 'abc' } }">Search</router-link> -->
<div class="list-location">
     <div class="location-item"><router-link v-for="(location, index) in listLocation" :key="index" to="#">{{ location.locationName }}</router-link></div> 
    </div>
  </div>
  

</template>

<script lang="js">
import router from "../router";
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('moduleLocation')
export default {
  data() {
    return {
      locationName:"",
      timeOut: null,
      timer: 500,
    }
  },
  computed: {
    ...mapState({
      listLocation: state => state.listLocation,
    }),
  },
  methods:{
    handleSearch(){
      //Debounce Input Search
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        this.getLocationByNameAction(this.locationName);
      }, this.timer);
    },
    ...mapActions({
      getLocationByNameAction: 'getLocationByNameAction',
    })
  }
}
</script>

<style lang="scss">
.list-location{
  width: 50%;
  border-radius: 28px;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  margin-top: 5px;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 1%;
  z-index: 999;
  .location-item{
    line-height: 50px;
    a{
      padding-left: 35px;
      display: block;
      line-height: 50px;
      &:hover {
        color:#fffafb;
        background-color: #f91942;
    }
    }

  }
}
</style>