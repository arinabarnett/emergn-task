<template>
  <div class="characters">
    <SearchBar />
    <List :items="characters" />
    <Pagination />
  </div>
</template>

<script>
import List from "@/components/List.vue";
import SearchBar from "@/components/SearchBar.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Home",
  components: {
    List,
    SearchBar,
    Pagination
  },
  computed: {
    characters() {
      return this.$store.state.characters.results;
    }
  },
  created() {
    this.$store.dispatch("loadCharacters");
  },
};
</script>
