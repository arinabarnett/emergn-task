import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    characters: [],
    foundItems: [],
    currentPage: 1,
    totalPages: Number,
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
      state.totalPages = characters.info.pages;
    },
    SET_FOUND_ITEMS(state, items) {
      state.characters = items;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    }
  },
  actions: {
    loadCharacters(context) {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then(({ data }) => {
          console.log(data);
          context.commit("SET_CHARACTERS", data);
        })
        .catch(error => console.log(error));
    },
    findCharacter({ commit }, param) {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${param}`)
        .then(({ data }) => {
          console.log(data);
          commit("SET_FOUND_ITEMS", data);
        })
        .catch(error => console.log(error));
    },
    goToPage({ commit }, pageNumber) {
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
        .then(({ data }) => {
          console.log(data, "data when clicked");
          commit("SET_CURRENT_PAGE", pageNumber);
          commit("SET_CHARACTERS", data);
        })
        .catch(error => console.log(error));
    }
  },
});
