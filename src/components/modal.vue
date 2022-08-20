<template>
    <div class="ContainerPrincipal" v-if="closeModal">
        <div class="containerModal">
            <div class="containerImagem">
                <img src="imagem" alt="Quebrou">
            </div>
            <div class="informacoesPoke">
                <ul>
                    <li>Habilidade Primária:{{habilidade}}</li>
                    <li>Habilidade Secundária:{{habilidade2}}</li>
                    <li>Tipo: {{tipo}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "ModalInfo",
    props: {
        habilidade: String,
        habilidade2: String,
        tipo: String,
        imagem: String,
        bo: Boolean
    },
    data() {
        return {
            closeModal: this.bo,
        }  
    },
    methods: {
        return : {
            closeModal() {
                this.$emit(this.closeModal === true)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .ContainerPrincipal {
        // display: none;
        width: 100%;
        height: 100%;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        padding: 2rem;
        .containerModal {
            max-width: 560px;
            min-width: 300px;
            flex-direction: column;
            background: #f5f5dc;
            flex-wrap: wrap;
            display: flex;
            justify-content: flex-start;
            position: relative;
            padding: 1em;
            margin: 0 auto;
            

        .containerImagem{
            margin: 0 auto;
            max-width: 430px;            
            img {
                width: 100%;
            }
        }
        .informacoesPoke {
           ul {
            @include info;
            li {
                margin-bottom: 20px;
                letter-spacing: 2px;
            }
           }
        }
        }


    }
</style>
