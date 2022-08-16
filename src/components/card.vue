<template>
    <div class="card">
       <span>{{name}}</span>
        <img :src="image">
    </div>
</template>

<script>
export default {
    name: 'cardPokemon',
    props: {
        name: String,
        image: String,
    },
}
</script>
<style lang="scss" scoped>
.card {
   border: 2px solid black;
   width: 320px;
   span {
    @include nome;
   display: block;
   }
}
</style>
