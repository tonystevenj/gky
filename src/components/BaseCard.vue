<template>
  <div>
    <!-- <br> -->
    <h6 class="card-subtitle"><b>{{item?item.title:""}}</b></h6>
    <h6 class="card-subtitle mb-2 text-muted">{{item?item.subtitle:""}}</h6>
    <p class="card-text">{{item? item.content:""}}</p>
    <a
      :href="item? item.link.url:''"
      class="card-link"
    >{{item? item.link.title:''}}</a>
    <!-- <a href="#" class="card-link">Another link</a> -->

  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
};
</script>

<style scoped>
div {
  margin-top: 2rem;
  /* margin-bottom:100px; */
  /* margin-right:50px; */
  /* margin-left:50px; */
}

h6 {
  margin-top: 0.5rem;
}
</style>