<template>
    <header>
        <h2>Pokemon</h2>
    </header>
</template>
<script>
export default {
    name: 'MyHeader',
}
</script>
<style lang="scss" scoped>
header{
    @include header;

    h2 {
        @include fonte;
    }
}
</style>
