<template>
    <div class="card"
    @click="emitir"
    >
       <span>{{name}}</span>
        <img :src="image"/>
    </div>
</template>

<script>
export default {
    name: 'cardPokemon',
    props: {
        name: String,
        image: String,
    },
    data() {
        return {
            nomePokemon: this.name
        }
    },
    methods: {
        emitir() {
            this.$emit("meu-evento", this.nomePokemon)
        }
    }
}
</script>
<style lang="scss" scoped>
.card {
   border: 2px solid black;
   width: 300px;
   display: flex;
   flex-direction: column;
   span {
    @include nome;
   display: block;
   padding-top: 20px;
   
   }
   img {
    width: 300;
   }
}
</style>
