// Crie um componente chamado HelloWorld que contenha:
// - um título <h2> com o texto: Criando componentes
// - a imagem com o atributo src para: https://images.unsplash.com/photo-1644794472051-36d154dfe487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80
// - um parágrafo com um texto qualquer 


function HelloWorld(){
    return(
        <main>

            <h2>Criando componentes</h2>
            <img src="https://images.unsplash.com/photo-1644794472051-36d154dfe487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="Tico Albuquerque"/>
            <p>Texto qualquer</p>
        </main>
    );
}


export default HelloWorld;