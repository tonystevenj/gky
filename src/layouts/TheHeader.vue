<template>
  <div id="d1">
    <!-- <div>{{ulr()}}</div> -->
    <img
      :src="gky.avatarurl"
      alt="Avatar"
      class="avatar"
    >
    <h1><b>{{gky.name}}</b></h1>
    <h3>{{gky.title}}</h3>
    <div style="text-align:left;">

      <p v-html="gky.about"></p>
    </div>
    <!-- <div id="links">
    <a href="https://github.com/KeyangYu"><img class ="links" src="../assets/github.png"></a>
    </div> -->
    <div>
      <img-links
        v-for="link in gky.links"
        :key="link.url"
        :link="link"
      ></img-links>
    </div>
  </div>
</template>

<script>
import ImgLinks from "../components/ImgLinks.vue";
export default {
  components: { ImgLinks },
  props: ["gky"],
  methods: {
    ulr() {
      return this.gky.avatarurl;
    },
  },
};
</script>



<style scoped>
#d1 {
  text-align: center;
  margin-top: 3rem;
  /* position: fixed; */
  width: 70%;
  margin-left: 15%;
}
/* div {
  margin-right: auto;
  margin-left: auto;
}

img {
  max-width: 100%;
  max-height: 100%;
} */

.avatar {
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>