<template>
    <div class="ContainerPrincipal">
        <div class="containerModal">
            <span>x</span>
            <div class="containerImagem">
                <img :src="imagem" alt="Quebrou">
            </div>
            <div class="informacoesPoke">
                <ul>
                    <li>Habilidade Primária:{{habilidade}}</li>
                    <li>Habilidade Primária:{{habilidade2}}</li>
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
    },
}
</script>
<style lang="scss" scoped>
    .ContainerPrincipal {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 150px;
        .containerModal {
            max-width: 560px;
            min-width: 250px;
            flex-direction: column;
            background: linear-gradient(230deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 4%, rgba(0,212,255,1) 100%);
            flex-wrap: wrap;
            display: flex;
            justify-content: center;
            position: relative;
            padding: 1em;
            margin: 0 auto;
            border-radius: 10%;
             animation: move .5s;
            
            span {

                display: flex;
                color: whitesmoke;
                font-size: 25px;
                cursor: pointer;
                border: 1px solid wheat;
                border-radius: 40px;
                width: 30px;
                // text-align: center;
               padding: 5px;
                justify-content: center;
            }

        .containerImagem{
            margin: 0 auto;
            min-width: 250px;            
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

        @keyframes move {
  from {
      opacity: 0;
      transform: translatey(-2000px);
  }
  to {
    opacity: 1;
    transform: translatey(0);

  }
}

    }
</style>
