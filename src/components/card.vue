<template>
    <div class="card">
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
