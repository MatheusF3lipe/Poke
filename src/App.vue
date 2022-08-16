<template>
  <div id="app">
    <MyHeader class="header"></MyHeader>

    <div class="containerInput">
      <input type="text" placeholder="Busque aqui seu pokemon">
    </div>

    <div class="container"  >
        <cardPokemon v-for="i in pokemons" :key="i.id" 
        :name="i.name" 
        src="./assets/image/pok.webp"
        />
        
        
    </div>

  </div>
</template>

<script>
import MyHeader from "./components/header";
import cardPokemon from "./components/card.vue";
import api from "@/services/api";

export default {
  name: "App",
  components: {
    MyHeader,
    cardPokemon,
  },
  data() {
    return {
      pokemons: {},
    };
  },
  methods: {
    async FetchPoke() {
      const fetchpokemons = await api.get("/pokemon?limit=20");
      this.pokemons = fetchpokemons.data.results;
      console.log(this.pokemons);
    },
    async handle(name) {
      const fetchInfo = await api.get(`pokemon/${name}`)
      console.log(fetchInfo)
    }
  },
  mounted() {
    this.FetchPoke();
    this.handle();
  },
};
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
