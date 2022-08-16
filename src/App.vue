<template>
  <div id="app">
    <MyHeader class="header"></MyHeader>

    <div class="containerInput">
      <input type="text" placeholder="Busque aqui seu pokemon">
    </div>

    <div class="container"  >
        <cardPokemon v-for="i in pokemons" 
        :key="i.id" 
        :name="i.name"
        :image="image(i.name)"
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
      console.log(fetchpokemons)
      this.pokemons = fetchpokemons.data.results;
    },
      image(name) {
       api.get(`pokemon/${name}`).then((response) => {
        return response.data.sprites.front_default;
    
      })
    }
  },
  created() {
    this.FetchPoke();
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
