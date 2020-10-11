<template>
  <div class="navigation">
    <div class="mt-3">
      <b-pagination
        v-model="currentPage"
        :total-rows="Number(totalPages)"
        :per-page="perPage"
        first-number
        last-number
        align="center"
        :click="this.switchPage(currentPage)"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      perPage: 1,
      currentPage: 0
    };
  },
  props: {
    items: Array
  },
  methods: {
    ...mapActions({
      switchPage: "goToPage"
    })
  },
  computed: {
    totalPages() {
      return this.$store.state.totalPages;
    }
  }
};
</script>
