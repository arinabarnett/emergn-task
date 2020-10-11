<template>
  <div>
    <b-card
      v-on:click="seen = !seen"
      class="overflow-hidden"
      style="max-width: 480px;"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            v-if="item.image"
            :src="item.image"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="item.name">
            <b-card-text>
              <div v-if="seen">
                <p>Gender: {{ item.gender }}</p>
                <p>Location: {{ item.location.name }}</p>
                <p>Species: {{ item.species }}</p>
                <p>Status: {{ item.status }}</p>
              </div>
              <p v-if="!seen">Click to see additional info!</p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data: function() {
    return {
      seen: false
    };
  }
};
</script>
