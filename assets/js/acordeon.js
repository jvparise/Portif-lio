const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')
// Aqui, o código seleciona todos os elementos no DOM (Document Object Model) que possuem a classe trigger e que estão dentro de um elemento com a classe acordeon.
// Isso retorna uma lista de elementos que acionam o comportamento do acordeão.
// O código então itera sobre cada um desses elementos trigger.
acordeonTriggers.forEach((trigger) => {
    // Para cada trigger, o código adiciona um ouvinte de eventos (addEventListener) que detecta quando o elemento é clicado.
    trigger.addEventListener('click', (e) => {
        // Quando um trigger é clicado, o código identifica o elemento pai do trigger, que seria o contêiner do acordeão.
// Verifica se o acordeão já tem a classe open, que indica se ele está aberto ou fechado.
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')
        // Se o acordeão já estiver aberto (isOpen é verdadeiro), a classe open é removida, fechando o acordeão.
// Se o acordeão não estiver aberto (isOpen é falso), a classe open é adicionada, abrindo o acordeão.

        if (isOpen){
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})