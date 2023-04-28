// Copie e cole a estrutura do componente HelloWorld (desafio D), e altere o nome do componente para Hello.
// Modifique a maneira como a imagem é exibida. Agora, vocêe deverá baixar a imagem para o projeto (pode colocá-la na pasta do Desafio E, se preferir), e faça a importação dela para usá-la em seu componente.

import imagem from './photo-1.avif'


function Hello(){
    return(
        <main>

            <h2>Criando componentes</h2>
            <img src={imagem} alt="Tico Albuquerque"/>
            <p>Texto qualquer</p>
        </main>
    );
}


export default Hello;