<template>
  <div id="app">
    <MyHeader class="header"></MyHeader>

    <div class="containerInput">
      <input
        type="text"
        placeholder="Busque aqui seu pokemon"
        @input="filter = $event.target.value"
      />
    </div>

    <div class="container"
    @click="closemodal"
    >
    <div v-if="!filtro.length" class="gengar">
       <h3>Não há nenhum pokemon com esse nome :(</h3>
       <img src="../src/assets/image/gengar.gif" alt="gengar">
    </div>
     
      <cardPokemon
        @meu-evento="receberEvent"
        v-for="i in filtro"
        :key="i.id"
        :name="i.name"
        :image="i.image"
      />
      <div v-if="modalPoke">
        <modalPoke
        :habilidade="h1"
        :habilidade2="h2"
        :tipo="tipo"
        :imagem="image"
      />
      </div>
    </div> 
  </div>
</template>

<script>
import MyHeader from "./components/header";
import cardPokemon from "./components/card.vue";
import modalPoke from "./components/modal.vue";
import { http } from "./services/api";
import { PAGINATION_MAX } from "./constant/axios";
import { IMAGE_URL } from "./constant/reference";

export default {
  name: "App",
  components: {
    MyHeader,
    cardPokemon,
    modalPoke,
  },
  data() {
    return {
      pokemons: [],
      filter: "",
      retorno: false,
      modalPoke: false,
      nomes: '',
      h1: '',
      h2: '',
      image: '',
      tipo: '',
    };
  },
  async mounted() {
    const response = await http.get("pokemon/", {
      params: { limit: PAGINATION_MAX },
    });
    this.pokemons = response.data.results.map((pokemon, index) => ({
      ...pokemon,
      index: index,
      name: `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)} `,
      image: `${IMAGE_URL}${index + 1}.png`,
    }));
  },
  computed: {
    filtro() {
      if (this.filter) {
        const pokemons = this.pokemons.filter((pokemon) => {
          return pokemon.name
            .toLowerCase()
            .startsWith(this.filter.toLowerCase());
        });
        console.log(pokemons);
        return pokemons;
      }
      return this.pokemons;
    },
  },
  methods: {
    async receberEvent(mensagem) {
        this.nomes = mensagem.toLowerCase()
        const r = await http.get(`pokemon/${this.nomes}`)
        this.h1 = r.data.abilities[0].ability.name
        this.h2 = r.data.abilities[1].ability.name
        this.tipo = r.data.types[0].type.name
        this.image = r.data.sprites.front_default
        this.modalPoke = true
    },
    closemodal(){
      this.modalPoke = false
    }
  },
};
</script>

<style lang="scss">
#app {
.header {
  padding-top: 20px;
}

  .containerInput {
    display: flex;
    justify-content: center;
    input {
      margin-top: 50px;
      width: 300px;
      padding: 10px;
      text-align: center;
      margin-bottom: 30px;
      border: 2px solid black;
      border-radius: 30px;
      
    }
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    .gengar {
      @include return;

      img {
        width: 350px
      }
    }
  }
}
</style>
