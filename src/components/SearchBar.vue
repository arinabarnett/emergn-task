<template>
  <div>
    <b-container>
      <b-input-group class="mt-3">
        <b-form-input
          v-model="text"
          placeholder="What are you searching for, sailor?"
          :bind="this.search(text)"
        >
        </b-form-input>
      </b-input-group>
      <div class="mt-3"></div>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      text: ""
    };
  },
  created() {},
  methods: {
    ...mapActions({
      search: "findCharacter"
    })
  }
};
</script>
