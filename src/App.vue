<template>
  <the-header />
  <router-view/>
  <the-footer />
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
name: "App",
  components: {
    TheHeader,
    TheFooter
  }
}
</script>