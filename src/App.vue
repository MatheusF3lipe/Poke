<template>
  <div id="app">
    <MyHeader class="header"></MyHeader>

    <div class="containerInput">
      <input type="text" placeholder="Busque aqui seu pokemon" />
    </div>

    <div class="container">
      <cardPokemon
        v-for="i in pokemons"
        :key="i.id"
        :name="i.name"
        :image="i.image"
      />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/header";
import cardPokemon from "./components/card.vue";
import { http } from "./services/api";
import { PAGINATION_MAX } from "./constant/axios";
import { IMAGE_URL } from "./constant/reference";


export default {
  name: "App",
  components: {
    MyHeader,
    cardPokemon,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  async mounted() {

    const response = await http.get("pokemon/", {
      params: {limit: PAGINATION_MAX},
    });
    this.pokemons = response.data.results.map((pokemon,index) => ({
      ...pokemon,
      index: index,
      name: `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)} `,
      image: `${IMAGE_URL}${index + 1}.png`,
    }))
console.log(this.pokemons)
  }
}
</script>

<style lang="scss">
#app {
  .containerInput {
    display: flex;
    justify-content: center;
    input {
      margin-top: 50px;
      width: 300px;
      padding: 10px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
