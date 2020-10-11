<template>
  <div>
    <b-container>
      <b-card-group columns>
        <div v-for="(item, index) in items" :key="index">
          <Card v-bind:item="item" />
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "List",
  components: {
    Card
  },
  props: {
    items: {},
    foundItems: {}
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
