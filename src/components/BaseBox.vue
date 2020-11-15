<template>
  <div
    class="card"
    id="l1"
  >
    <div class="card-body">
      <h4 class="card-title">{{label}}</h4> 
      <hr
        style="border:5"
        size=5
      >
      <!-- <div>{{printq()}}</div> -->
      <base-card
        v-for="item in items"
        :key="item"
        :item="item"
      ></base-card>
    </div>
  </div>
</template>
<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["label", "items"],
  methods: {
    printq() {
      console.log(this.items);
    },
  },
};
</script>

<style scoped>
#l1 {
  /* border-radius: 12px; */
  border: none;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
  /* padding: 1rem; */
  /* margin: auto; */
  width: 74%;
  margin-left: 13%;
}
</style>