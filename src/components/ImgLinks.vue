<template>
    <a :href="link.url"><img
        class="links"
        :src="link.img"
      ></a>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style  scoped>
a {
 margin-left: 1rem;
 margin-right: 1rem;
}
img {
  width: 2rem;
  height: 2rem;
}
</style>